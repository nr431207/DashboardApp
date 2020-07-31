import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { getSegment, getVariable } from '../utils';

const CampDetails = ({ campaign, segments, tags, handleChange, toggleNameClick }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(true)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    handleChange(e);
    toggleNameClick(false) 
  }

  return (
    <Container fluid>
      <div>
        <h5>Campaign Name: </h5> 
        {editMode ? <input type="text" className="form-control" placeholder={campaign.name} name="name" onChange={handleChange}/> : campaign.name} 
        {!editMode && <Button onClick={toggleEdit}> edit </Button>}
      </div>
      <hr/>
      <div>
        <h5>Segment: </h5> 
        {editMode ? 
        <Dropdown onSelect={handleChange}>
          <Dropdown.Toggle variant="success">
            {getSegment(campaign, segments)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {segments.map(segment => (
              <Dropdown.Item key={segment.id} eventKey={segment.name}>{segment.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown> : getSegment(campaign, segments)}
        {!editMode && <Button onClick={toggleEdit}> edit </Button>}
      </div>
      <hr/>
      <div>
        <h5>Message: </h5>
        {editMode ? <input type="text" className="form-control" name="text" value={getVariable(campaign.text, tags)} onChange={handleChange}/> : getVariable(campaign.text, tags)}
        {!editMode && <Button onClick={toggleEdit}> edit </Button>}
      </div>
      <hr/>
      <div>
        <h5>Media: </h5>
        {editMode ? 
        <div>
          <input className="form-control" name="media" placeholder={campaign.media} onChange={handleChange}/>
          <Form.File name="media" onChange={handleChange} />
        </div>
         : campaign.media}
        {!editMode && <Button onClick={toggleEdit}> edit </Button>}
      </div>
      {editMode && <Button onClick={onSubmit}>Submit Changes</Button>}
    </Container>
  )
}

export default CampDetails;

