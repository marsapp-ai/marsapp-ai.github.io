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
  ],
  secondaryLinks: [
    { text: 'Terms and conditions', href: getPermalink('/terms-and-conditions') },
    { text: 'Privacy policy', href: getPermalink('/privacy-policy') },
  ],
  footNote: '©Copyright M.A.R.S. · All rights reserved.',
};
