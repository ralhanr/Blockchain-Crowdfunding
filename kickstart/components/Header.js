import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
  return(
    <Menu style={{marginTop: '20px'}}>
    <Link route='/'>
    <a className='item'>CrowdCoin</a>
    </Link>

        <Menu.Menu position='right'>
        <Link route='/'>
        <a className='item'>Existing Campaigns</a>
        </Link>
        <Link route='/campaigns/new'>
        <a className='item'>Create Campaign +</a>
        </Link>
        </Menu.Menu>
      </Menu>
  )
}
