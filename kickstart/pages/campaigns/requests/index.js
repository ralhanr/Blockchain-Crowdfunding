import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class Requests extends Component {

  static async getInitialProps (props) {
    const address = props.query.address;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
    );
    return({address, requests, requestCount, approversCount});
  }
  renderRows () {
    return this.props.requests.map((request, index)=> {
      return <RequestRow
      key={index}
      id={index}
      request={request}
      address={this.props.address}
      approversCount={this.props.approversCount}
      />;
    }
  )
  }

  render() {
    const {Header, Row, HeaderCell, Body} = Table;
    return(
      <Layout>
      <div>
      <h2>Below are all the Pending Requests on this Campaign.</h2>
      <Table>
      <Header>
      <Row>
      <HeaderCell>ID</HeaderCell>
      <HeaderCell>Description</HeaderCell>
      <HeaderCell>Amount(in Ether)</HeaderCell>
      <HeaderCell>Recipient</HeaderCell>
      <HeaderCell>ApprovalCount/Total Contributors</HeaderCell>
      <HeaderCell>Approve</HeaderCell>
      <HeaderCell>Finalize</HeaderCell>
      </Row>
      </Header>
      <Body> {this.renderRows()} </Body>
      </Table>


      <Link route={`/campaigns/${this.props.address}/requests/new`}>
      <a>
      <Button primary floated='right' style={{marginBottom: 10}}>Add a New Request </Button>
      </a>
      </Link>
      <div>
      </div>
      Found {this.props.requestCount} requests.
      </div>
      </Layout>
    )
  }
}

export default Requests;
