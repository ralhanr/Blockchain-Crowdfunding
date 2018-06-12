import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {

  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return(
      {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      openRequests: summary[2],
      approvers: summary[3],
      manager: summary[4]
      }
    )
  }

showDetails () {
  const {minimumContribution, balance, openRequests, approvers, manager} = this.props;
  const items = [
  {
    header: manager,
    description: 'Manager of this Campaign',
    meta: 'This manager can create requests and withdraw money to pay Recipients',
    style: {overflowWrap: 'break-word'},
  },
  {
    header: minimumContribution,
    description: 'Minimum Contribution in Ether',
    meta: 'You need to put in the Minimum Contribution to be able to be a contributor.',
    style: {overflowWrap: 'break-word'},
  },
  {
    header: approvers,
    description:'No of Contributors on this Campaign.',
    meta: 'These are the number of people who are active and have funded into this campaign.',
    style: {overflowWrap: 'break-word'},
  },
  {
    header: web3.utils.fromWei(balance, 'ether'),
    description:'Total Balance of Contributions so far in Ether.',
    meta: 'This is total amount funded into this Campaign and hence the total amount that can be used to pay Recipients.',
    style: {overflowWrap: 'break-word'},
  },
  {
    header: openRequests,
    description:'Number of Open Requests',
    meta: 'Open Requests to Pay Contributors.',
    style: {overflowWrap: 'break-word'},
  },
]

return <Card.Group items={items} />
}

  render() {
    return(
      <Layout>
      <div>
      <h3>Campaign Details </h3>
      <Grid>
      <Grid.Row>
      <Grid.Column width={10}>
        <h3>{this.showDetails()}</h3>
      </Grid.Column>
      <Grid.Column width={6}>
        <ContributeForm address={this.props.address}/>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
      <Link route={`/campaigns/${this.props.address}/requests`}>
      <a>
      <Button primary>Show Pending Requests </Button>
      </a>
      </Link>
      </Grid.Column>
      </Grid.Row>

      </Grid>
      </div>
      </Layout>
    )
  }
}
export default CampaignShow;
