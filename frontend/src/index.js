import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/*eslint-disable import/no-unassigned-import */
import './index.css';
import { makeMainRoutes } from './routes';
const routes = makeMainRoutes();
registerServiceWorker();

ReactDOM.render( routes, document.getElementById('root'));
