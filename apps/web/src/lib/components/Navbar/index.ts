import Navbar from './Navbar.svelte';

export const _navPages: {
  title: string;
  slug: string;
  url: string;
}[] = [
  {
    title: 'Home',
    slug: 'home',
    url: '/'
  },
  {
    title: 'Markets',
    slug: 'markets',
    url: '/'
  },
  {
    title: 'Funding',
    slug: 'funding',
    url: '/'
  },
  {
    title: 'Invest',
    slug: 'invest',
    url: '/'
  },
  {
    title: 'Moneysend',
    slug: 'moneysend',
    url: '/'
  },
  {
    title: 'Crypto',
    slug: 'crypto',
    url: '/'
  }
];

export default Navbar;
