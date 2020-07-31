import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CampaignForm = ({ segments, handleAdd, onSubmit }) => {
  return(
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Campaign Name</Form.Label>
        <Form.Control name="name" placeholder="Enter campaign name" onChange={handleAdd}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="text" value="{shop_name}: Hi {first_name}! This is a sample text message. Reply STOP to unsubscribe." onChange={handleAdd}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Media</Form.Label>
        <Form.File name="media" type="url" placeholder="Media" onChange={handleAdd} />
      </Form.Group>
      <Form.Label>Segments</Form.Label>
      <Form.Control as="select" multiple name="segment_id" onChange={handleAdd}>
        {segments.map(segment => (
          <option key={segment.id} value={segment.value}>{segment.name}</option>
        ))}
      </Form.Control>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CampaignForm;
