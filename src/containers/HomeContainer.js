import React from 'react';
import Home from '../components/Home';
import {connect} from './react-redux';
import { get_Data } from '../service/actions/action'

const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({

})

// export default function HomeContainer() {
//   return <div>
//       <Home/>
//   </div>;
// }
export default connect(mapStateToProps, mapDispatchToProps)(Home)