import React, { Component } from 'react';
import { getProfile, getDoggo } from '../dataUtils';
import { Card, Button } from 'react-bootstrap';

export default class Overview extends Component {
  constructor() {
    super();
    this.getProfileData = this.getProfileData.bind(this);
    this.state = {
      profile: null,
      loading: true,
      doggo: null,
    }
  }

  componentDidMount() {
    this.getProfileData();
    getDoggo()
    .then(res => {
      const doggo = res.data.message;
      this.setState({doggo});
    })
  }

  getProfileData() {
    getProfile()
    .then(res => {
      const profile = res.data;
      this.setState({ profile, loading: false });
    });
  }

  // returns action as a readable string
  // if we end up with a bunch more actions, would convert this function to be generic for any string
  getActionString(action) {
    switch(action) {
      case "check_in":
        return "Check In";
      case "attend_workshop":
        return "Attend Workshop";
      case "call_phone":
        return "Call Phone";
      default:
        return ""
    }
  }

  formatDateTime(datetime) {
    const date = new Date(datetime);
    return date.toLocaleString();
  }

  // an imperfect phone number formatter :)
  formatPhoneNumber(numString) {
    return `${numString.slice(0, 3)} - ${numString.slice(3, 6)} - ${numString.slice(6, numString.length)}`;
  }

  renderLoadingState() {
    return <Card>Loading...</Card>
  }

  renderEmptyState() {
    const { doggo } = this.state;
    return (
      <>
        Hey! We couldn't find a profile that matches what you were looking for, but here's a dog:
        <div className="card-img-container">
          <Card.Img src={doggo}></Card.Img>
        </div>
      </>
    );
  }

  // renders the stats above the bio on the app
  renderProfileHighlights(profile) {
    const { type, checked_in } = profile;
    return <Card.Header>
      {type === 'hacker' && <div className={`${type} pill`}>workshops attended: {profile.num_workshops_attended}</div>}
      {type === 'sponsor' && <div className={`${type} pill`}>company: {profile.sponsor_company}</div>}
      {type === 'organizer' && <div className={`${type} pill`}>{this.formatPhoneNumber(profile.phone_number)}</div>}
      {type === 'volunteer' && <div className={`${type} pill`}>next shift: {this.formatDateTime(profile.next_shift)}</div>}
      <div className={checked_in ? 'green pill' : 'orange pill'}>{checked_in ? 'checked in' : 'not checked in'}</div>
    </Card.Header>;
  }

  renderProfile() {
    const { profile } = this.state;
    return (
      <>
        <Card.Title>
            {profile.name} 
            <span className={`${profile.type} badge`}>{profile.type}</span>
        </Card.Title>
        <div className="card-img-container">
          <Card.Img src={profile.profile_pic}/>
        </div>
        {this.renderProfileHighlights(profile)}
        <Card.Body>
          <Card.Text>{profile.bio}</Card.Text>
          <div>
            {profile.actions.map(action => {
              return (
                <Button className={profile.type} variant="primary" key={action}>{this.getActionString(action)}</Button>
              )
            })}
          </div>
        </Card.Body>
      </>
    )
  }

  render() {
    const { profile, loading } = this.state;

    if(loading){
      return this.renderLoadingState();
    }

    const footerButtonClass = profile ? profile.type : ''

    return (
      <Card>
        {!profile && this.renderEmptyState()}
        {profile && this.renderProfile()}
        <Card.Footer>
          <Button className={footerButtonClass} onClick={this.props.onLogOut}>Log Out</Button>
          <Button className={footerButtonClass} onClick={this.getProfileData}>See Another Profile</Button>
        </Card.Footer>
      </Card>
    );

  }
}