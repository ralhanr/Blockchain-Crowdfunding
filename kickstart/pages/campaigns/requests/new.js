import React, {Component} from 'react';
import {Button, Form, Input, Message} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';
import Layout from '../../../components/Layout';

class newRequest extends Component {

  state = {
    description: '',
    value: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  }

  static async getInitialProps(props) {
    const address = props.query.address;
    return {address: address};
  }
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, errorMessage: ''});
    const campaign = Campaign(this.props.address);
    const {description, value, recipient} = this.state;
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
      .send({from: accounts[0]})
      Router.pushRoute(`/campaigns/${this.props.address}/requests`)
    }
    catch(err) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  }
  render() {
    return(
      <Layout>
      <Link route={`/campaigns/${this.props.address}/requests`}>
      <a> Back to Requests Page </a>
      </Link>
      <h3>Create a New Request to withdraw money from this Campaign</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
    <Form.Field width={12}>
      <label>Description</label>
      <Input value = {this.state.description}
      onChange={event=> this.setState({description:event.target.value})}
      />
    </Form.Field>
    <Form.Field width={12}>
      <label>Value in Ether</label>
      <Input value={this.state.value}
      onChange={event=> this.setState({value:event.target.value})}
      />
    </Form.Field>
    <Form.Field width={12}>
      <label>Recipient</label>
      <Input value={this.state.recipient}
      onChange={event=> this.setState({recipient:event.target.value})}
      />
    </Form.Field>
    <Message error header='Oops...' content={this.state.errorMessage} />
    <Button loading={this.state.loading} primary type='submit'>Create a Request</Button>
  </Form>
      </Layout>
    )
  }
}
export default newRequest;
