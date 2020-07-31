import * as actions from '../actions/constants';
import data from "../data/campaign.json";

const initialState = {...data};

export default function campaignReducer (state = initialState, action) {
  switch(action.type) {
    case actions.DELETE_CAMPAIGN:
      let filteredCampaigns = state.campaigns.filter(camp => camp.id !== action.id) 
      return {
        ...state,
        campaigns: filteredCampaigns
      }
    case actions.EDIT_CAMPAIGN:
      const { id, name, text, segment_id, media, status, stats} = action.data
      let updatedCampaigns = state.campaigns.map(camp => {
        if(camp.id === id) {
          return {
            id,
            name,
            text,
            status,
            segment_id,
            media,
            stats
          }
        }
        return camp
      })
      return {
        ...state,
        campaigns: updatedCampaigns

      }
    case actions.ADD_CAMPAIGN:
      return{
        ...state,
        campaigns: [...state.campaigns, action.data]
      }   
    default: return state
  }
}