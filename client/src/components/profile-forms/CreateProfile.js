import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 class="large text-primary">Create Your Profile</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">* Select your NFL team</option>
            <option value="Arizona Cardinals">Arizona Cardinals</option>
            <option value="Atlanta Falcons">Atlanta Falcons</option>
            <option value="Baltimore Ravens">Baltimore Ravens</option>
            <option value="Buffalo Bills">Buffalo Bills</option>
            <option value="Carolina Panthers">Carolina Panthers</option>
            <option value="Chicago Bears">Chicago Bears</option>
            <option value="Cincinnati Bengals">Cincinnati Bengals</option>
            <option value="Cleveland Browns">Cleveland Browns</option>
            <option value="Dallas Cowboys">Dallas Cowboys</option>
            <option value="Denver Broncos">Denver Broncos</option>
            <option value="Detroit Lions">Detroit Lions</option>
            <option value="Green Bay Packers">Green Bay Packers</option>
            <option value="Houston Texans">Houston Texans</option>
            <option value="Indianapolis Colts">Indianapolis Colts</option>
            <option value="Jacksonville Jaguars">Jacksonville Jaguars</option>
            <option value="Kansas City Chiefs">Kansas City Chiefs</option>
            <option value="Las Vegas Raiders">Las Vegas Raiders</option>
            <option value="Los Angeles Chargers">Los Angeles Chargers</option>
            <option value="Los Angeles Rams">Los Angeles Rams</option>
            <option value="Miami Dolphins">Miami Dolphins</option>
            <option value="Minnesota Vikings">Minnesota Vikings</option>
            <option value="New England Patriots">New England Patriots</option>
            <option value="New Orleans Saints">New Orleans Saints</option>
            <option value="New York Giants">New York Giants</option>
            <option value="New York Jets">New York Jets</option>
            <option value="Philadelphia Eagles">Philadelphia Eagles</option>
            <option value="Pittsburgh Steelers">Pittsburgh Steelers</option>
            <option value="San Francisco 49ers">San Francisco 49ers</option>
            <option value="Seattle Seahawks">Seattle Seahawks</option>
            <option value="Tampa Bay Buccaneers">Tampa Bay Buccaneers</option>
            <option value="Tennessee Titans">Tennessee Titans</option>
            <option value="Washington Football Team">
              Washington Football Team
            </option>
          </select>
          <small class="form-text">Which team are you in charge of?</small>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div class="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small class="form-text">Tell us a little about yourself</small>
        </div>

        <div class="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            class="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div class="form-group social-input">
              <i class="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" class="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
