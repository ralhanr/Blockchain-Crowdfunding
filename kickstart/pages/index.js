import React,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';


class CampaignIndex extends Component {

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return(
      { campaigns: campaigns}
    )
  }
//async componentDidMount() {
  //const campaigns = await factory.methods.getDeployedCampaigns().call();
  //console.log(campaigns);
//}
renderCampaigns() {
  const items = this.props.campaigns.map(address => {
    return {
      header: address,
      description: (
        <Link route={`/campaigns/${address}`}>
        <a>View Campaign Details </a>
        </Link>
      ),
      fluid: true
    };
  });
  return <Card.Group items={items} />
}
  render() {
    return(
      <Layout>
      <div>
      <h3> Open Campaigns </h3>
      <Link route='/campaigns/new'>
      <a>
      <Button floated = 'right' content='Create a Campaign' icon='add' primary />
      </a>
      </Link>
      <h2>{this.renderCampaigns()} </h2>
      </div>
      </Layout>
    )
  }
}

export default CampaignIndex;
