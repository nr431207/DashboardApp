import {
  getVariable,
  getSegment,
  getValue, 
  getName
} from './utils';

describe('getVariable', () => {
  let message = "Hey {first_name}! Back at {shop_name} we've gotten a WILD amount of home updates you NEED this Fall. 👀 {shop_link}";
  let tagList = {first_name: 'Mike', shop_name: 'awesomeShop', shop_link:"www.shoplink1.com"}
  it('should return proper message using variables',() => {
    expect(getVariable(message, tagList)).toBe("Hey Mike! Back at awesomeShop we've gotten a WILD amount of home updates you NEED this Fall. 👀 www.shoplink1.com");
    tagList = {first_name: 'Mike', shop_name: null, shop_link:null}
    expect(getVariable(message, tagList)).toBe("Hey Mike! Back at {shop_name} we've gotten a WILD amount of home updates you NEED this Fall. 👀 {shop_link}");
  });
});

describe('getSegment', () => {
  let campaign = {segment_id: 3};
  let segments = [{
    id: 3,
    name: "Decor Purchases",
    subscribers_count: 1204
  }]
  it('should return the segment name',() => {
    expect(getSegment(campaign, segments)).toBe("Decor Purchases");
  });
});

describe('getValue', () => {
  it('should get the proper value for the input field if input name is not segment',() => {
    let e = {target: {value: 'foo', name:'bar'}}
    let segments = [{
      id: 3,
      name: "Decor Purchases",
      subscribers_count: 1204
    }]
    expect(getValue(segments, e)).toBe("foo");
  });

  it('should return segment id if the input name is segment_id', () => {
    let e = {target: {value: 'Decor Purchases', name:'segment_id'}}
    let segments = [{
      id: 3,
      name: "Decor Purchases",
      subscribers_count: 1204
    }]
    expect(getValue(segments, e)).toBe(3);
  });
});

describe('getName', () => {
  it('should return proper name of the input',() => {
    let e = {target:{name:"name"}}
    expect(getName(e)).toBe("name")
  });

  it('should return segment_id if e.target is falsy', () => {
    let e = {};
    expect(getName(e)).toBe('segment_id');
  });
});