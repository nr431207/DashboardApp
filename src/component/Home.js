import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editCampaign, deleteCampaign, addCampaign } from '../actions/actionCreators';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Campaign from './Campaign';
import CampDetails from './CampDetails';
import CampaignForm from './CampaignForm';
import Modal from 'react-bootstrap/Modal';
import { getValue, getName } from '../utils';

const Home = ({campaigns, segments, tags, deleteCampaign, editCampaign, addCampaign }) => {
  const [ isNameClicked, toggleNameClick ] = useState(false);
  const [isAlertActive, setAlert] = useState(false);
  const [campaign, setCampaign] = useState({});
  const [isCreating, setCreating] = useState(false);

  const handleNameClick = name => {
    toggleNameClick(true);
    const clickedCampaign = campaigns.filter(camp => camp.name === name);
    setCampaign(clickedCampaign[0]);
  }

  const handleCreateClick = () => {
    setCreating(true);
  }

  const handleDelete = id => {
    deleteCampaign(id);
  }

  const handleChange = (e) => {
    setCampaign({...campaign, [getName(e)] : getValue(segments, e)});
    editCampaign(campaign);
  }

  const handleAdd = (e) => {
    setCampaign({
      ...campaign,
      [e.target.name] : getValue(segments, e),
      stats: null,
      status:"Preview",
      id: Math.floor(Math.random() * 100),
    });
  }

  const handleDismiss = () => {
    setAlert(false);
    setCreating(true);
  }

  const onSubmit = e => {
    e.preventDefault();
    for(let key in campaign) {
      if(!campaign[key]) {
        setAlert(true);
      }
      else {
      addCampaign(campaign);
      setCreating(false);
      }
    }
  }

  if(isNameClicked) return (
    <CampDetails
      campaign={campaign}
      segments={segments}
      tags={tags}
      handleChange={handleChange}
      toggleNameClick={toggleNameClick}
    />
  )
  if(isAlertActive) return (
    <Modal show={isAlertActive} onHide={handleDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>some fileds are missing!</Modal.Title>
      </Modal.Header>
    </Modal>
  )
  if(isCreating) return (
    <CampaignForm
      segments={segments}
      handleAdd={handleAdd}
      onSubmit={onSubmit}
    />
  )
  return (
    <Container fluid>
      <Button className="create-button" variant="primary" onClick={handleCreateClick}>Create a new campaign</Button>
      <div>
        <h3>Open Campaigns</h3>
        {campaigns.length ?
        <Table responsive>
          <tbody>
          <tr>
            <th>Campaign</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {campaigns.map(camp => (
            camp.status === "Preview" && 
            <Campaign 
              camp={camp}
              key={camp.id}
              segments={segments}
              handleNameClick={handleNameClick}
              isNameClicked={isNameClicked}
              handleDelete={handleDelete}
            />   
          ))}
          </tbody>
        </Table> : 'no campaigns to show'
        }
      </div>
      <div>
        <h3>Sent Campaigns</h3>
        {campaigns.length ? 
        <Table responsive>
          <tbody>
          <tr>
            <th>Campaign</th>
            <th>Status</th>
            <th>Sent</th>
            <th>Clicked</th>
          </tr>
          {campaigns.map(camp => (
            camp.status === "Sent" && <Campaign camp={camp} key={camp.id}/>       
          ))}
          </tbody>
        </Table>
        : 'you have not sent any campaings'}
      </div>
    </Container>
  )
}

const mapStateToProps = ({campaigns, segments, tags}) => ({
  campaigns,
  segments,
  tags
});

const mapDispatchToProps = (dispatch) => ({
  editCampaign: e => dispatch(editCampaign(e)),
  deleteCampaign: e => dispatch(deleteCampaign(e)),
  addCampaign: e => dispatch(addCampaign(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
