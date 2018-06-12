import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x045D44464f7ac15d409687D87C0e8157B803844e');

export default instance;
