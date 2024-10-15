import { getPermalink } from './utils/permalinks';
import { SITE } from 'mars:config';

export const headerData = {
  links: [
    {
      text: 'Mission',
      href: getPermalink('/#mission'),
    },
    {
      text: 'Solutions',
      href: getPermalink('/#solutions'),
    },
    {
      text: 'Products',
      href: getPermalink('/#products'),
    },
    {
      text: 'Advantages',
      href: getPermalink('/#advantages'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Go to app', href: SITE.app, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Presentation',
      links: [
        { text: 'Mission', href: getPermalink('/#mission') },
        { text: 'Solutions', href: getPermalink('/#solutions') },
        { text: 'Products', href: getPermalink('/#products') },
        { text: 'Advantages', href: getPermalink('/#advantages') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Our story', href: getPermalink('/our-story') },
        { text: 'Contact us', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Updates and insights',
      links: [{ text: 'Blog', href: getPermalink('/blog') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms and conditions', href: getPermalink('/en/terms-and-conditions') },
    { text: 'Privacy policy', href: getPermalink('/en/privacy-policy') },
  ],
  footNote: '©Copyright M.A.R.S. · All rights reserved.',
};
