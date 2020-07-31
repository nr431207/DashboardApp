import * as actions from '../actions/constants';

export const deleteCampaign = id => ({
  type: actions.DELETE_CAMPAIGN,
  id
});

export const editCampaign = data => ({
  type: actions.EDIT_CAMPAIGN,
  data 
});

export const addCampaign = data => ({
  type: actions.ADD_CAMPAIGN,
  data
});

