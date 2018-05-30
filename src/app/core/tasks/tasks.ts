
export interface Task {
  description: string;
  links?: Array<string>;
  routerLinks?: Array<string>;
}

const tasks: Array<Task> = [{
  description: `
    Create a lazy loaded page for Users list. Name it \'users-list\' component while creating.\n
    Use {{link}} to get the 20 users and display them in a list on the page.
    The properties to be shown in the list items should be:
    First Name, Last Name, Email, Phone
    `,
  links: ['https://randomuser.me/']
}, {
  description: `
    When the user list is created, upon clicking of any user item, the app should navigate to
    the user detail page (name it 'user-detail' component). This user details page would be dynamic.
    I.e. the url should contain the user id while navigating to the user detail page.
    There should be a back button on the user detail page so the end-user can go back to the user listing page.
    The properties to show on the user details are:
    Picture, First Name, Last Name, Email, Phone
  `,
  routerLinks: ['home']
}, {
  description: `
    The HOME page currently has two components, 'app-header' and 'app-content'.
    User can login from each of the two components but the state in these components are not synced.
    I.e. if the user logs in/logs out from the app-header, the app-content doesn't get notified.
    Go to {{link}} and implement the logic to notify the \'app-header'\n component
    and the \'app-content\' component when the user logs in and logs out of the app from either of the two components.
  `,
  routerLinks: ['home']
}];

export default tasks;
