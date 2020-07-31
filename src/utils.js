/**
 * replaces tags with variable values from state
 */
export const getVariable = (message, tags) => {
  if(message) {
    message = message.replace('{shop_link}', tags.shop_link ? tags.shop_link : '{shop_link}' )
    .replace('{first_name}', tags.first_name ? tags.first_name : '{first_name}')
    .replace('{shop_name}', tags.shop_name ? tags.shop_name : '{shop_name}');
  } else {
    message = "{shop_name}: Hi {first_name}! This is a sample text message. Reply STOP to unsubscribe.";
  }
  return message;
}

/**
 * gets segment name for the campaign
 */
export const getSegment = (campaign, segments) => {
  return segments.filter(segment => segment.id === campaign.segment_id)[0].name;
}

/**
 * gets proper value for each input when user is editing or adding a campaign
 */
export const getValue = (segments, e) => {
  if(e.target && e.target.name !== 'segment_id') {
    return e.target.value;
  } else if(e.target && e.target.name === 'segment_id') {
    let filteredSegment = segments.filter(segment => segment.name === e.target.value);
    return filteredSegment[0].id;
  } 
  let filteredSegment = segments.filter(segment => segment.name === e);
  return filteredSegment[0].id;
}

/**
 * gets proper name of the altered input field
 */
export const getName = (e) => {
  if(!e.target) return 'segment_id'
    return e.target.name;
}