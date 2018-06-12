import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

const {Row, Cell} = Table;

class RequestRow extends Component {
  state = {
    loadingApprove: false,
    loadingFinalize: false,
    errorMessage: '',
  }

  onApprove = async() => {
    try{
      this.setState({loadingApprove:true});
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({from: accounts[0]});
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
    }
    catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loadingApprove: false});
  }
  onFinalize = async() => {
    try{
      this.setState({loadingFinalize:true});
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({from: accounts[0]});
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
    }
    catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loadingFinalize: false});
  }

  render() {
    const readyToFinalize = this.props.request.approvalCount > this.props.approversCount/2;
    return(
      <Row disabled = {this.props.request.complete} positive={readyToFinalize && !this.props.request.complete}>
      <Cell>{this.props.id}</Cell>
      <Cell>{this.props.request.description}</Cell>
      <Cell>{web3.utils.fromWei((this.props.request.value), 'ether')}</Cell>
      <Cell>{this.props.request.recipient}</Cell>
      <Cell>{this.props.request.approvalCount}/{this.props.approversCount}</Cell>
      <Cell>
      {this.props.request.complete ? null : (
        <Button loading={this.state.loadingApprove} basic color='green' onClick={this.onApprove}>Approve</Button>
      )}
      </Cell>
      <Cell>
      {this.props.request.complete ? null : (
        <Button loading={this.state.loadingFinalize} basic color='red' onClick={this.onFinalize}>Finalize</Button>
      )}
      </Cell>

      </Row>
    )
  }
}

export default RequestRow;
