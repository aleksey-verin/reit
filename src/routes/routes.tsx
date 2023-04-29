import ImgDashboard from '../components/ui/images/sidebar/ImgDashboard';
import ImgDeals from '../components/ui/images/sidebar/ImgDeals';
import ImgDashboardActive from '../components/ui/images/sidebar/ImgDashboardActive';
import ImgDealsActive from '../components/ui/images/sidebar/ImgDealsActive';
import ImgCustomers from '../components/ui/images/sidebar/ImgCustomers';
import ImgCustomersActive from '../components/ui/images/sidebar/ImgCustomersActive';
import ImgTasks from '../components/ui/images/sidebar/ImgTasks';
import ImgTasksActive from '../components/ui/images/sidebar/ImgTasksActive';
import ImgCalendar from '../components/ui/images/sidebar/ImgCalendar';
import ImgNotes from '../components/ui/images/sidebar/ImgNotes';
import ImgSettings from '../components/ui/images/sidebar/ImgSettings';
import Dashboard from '../pages/Dashboard';
import Deals from '../pages/Deals';
import Customers from '../pages/Customers';
import Tasks from '../pages/Tasks';
import Calendar from '../pages/Calendar';
import Notes from '../pages/Notes';
import Settings from '../pages/Settings';
import ImgCalendarActive from '../components/ui/images/sidebar/ImgCalendarActive';
import ImgNotesActive from '../components/ui/images/sidebar/ImgNotesActive';
import ImgSettingsActive from '../components/ui/images/sidebar/ImgSettingsActive';

export const routes = {
  dashboard: '/dashboard',
  deals: '/deals',
  customers: '/customers',
  tasks: '/tasks',
  calendar: '/calendar',
  notes: '/notes',
  settings: '/settings'
};

export const sidebarRoutes = [
  {
    path: routes.dashboard,
    title: 'Dashboard',
    menuImage: {
      normal: <ImgDashboard />,
      active: <ImgDashboardActive />
    },
    element: <Dashboard />,
    headerButtonTitle: 'Add New'
  },
  {
    path: routes.deals,
    title: 'Deals',
    menuImage: {
      normal: <ImgDeals />,
      active: <ImgDealsActive />
    },
    element: <Deals />,
    headerButtonTitle: 'Add New Deal'
  },
  {
    path: routes.customers,
    title: 'Customers',
    menuImage: {
      normal: <ImgCustomers />,
      active: <ImgCustomersActive />
    },
    element: <Customers />,
    headerButtonTitle: 'Add New Customer'
  },
  {
    path: routes.tasks,
    title: 'Tasks',
    menuImage: {
      normal: <ImgTasks />,
      active: <ImgTasksActive />
    },
    element: <Tasks />,
    headerButtonTitle: 'Add New Task'
  },
  {
    path: routes.calendar,
    title: 'Calendar',
    menuImage: {
      normal: <ImgCalendar />,
      active: <ImgCalendarActive />
    },
    element: <Calendar />,
    headerButtonTitle: 'Add New Event'
  },
  {
    path: routes.notes,
    title: 'Notes',
    menuImage: {
      normal: <ImgNotes />,
      active: <ImgNotesActive />
    },
    element: <Notes />,
    headerButtonTitle: 'Add New Note'
  },
  {
    path: routes.settings,
    title: 'Settings',
    menuImage: {
      normal: <ImgSettings />,
      active: <ImgSettingsActive />
    },
    element: <Settings />,
    headerButtonTitle: 'Add New'
  }
];

export interface routesType {
  path: string;
  title: string;
  menuImage: images;
  element: JSX.Element;
  headerButtonTitle?: string;
}

interface images {
  normal: JSX.Element;
  active: JSX.Element;
}
