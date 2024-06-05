export const ExpectedText = {
  PageTitle: 'Whoops, our bad...',
  MainBlocks: [
    'The page you requested was not found, and we have a fine guess why.\nIf you typed the URL directly, please make sure the spelling is correct.\nIf you clicked on a link to get here, the link is outdated.',
    'What can you do?\nHave no fear, help is near! There are many ways you can get back on track with Magento Store.\nGo back to the previous page.\nUse the search bar at the top of the page to search for your products.\nFollow these links to get you back on track!\nStore Home | My Account',
  ],
  SidebarBlocks: [
    'Compare Products\nYou have no items to compare.',
    'My Wish List\nYou have no items in your wish list.',
  ],
};

type Link = {
  text: string;
  url: string;
};

export const Links: Link[] = [
  { text: 'Go back', url: '#' },
  { text: 'Store Home', url: '/' },
  { text: 'My Account', url: '/customer/account/' },
];
