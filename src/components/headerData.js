import React from 'react';
import BM from '@material-ui/icons/Book';
import { FaGithub } from 'react-icons/fa';

export const headerData = {
  menuItems: [
    {
      title: 'BLOG', icon: <BM style={{ marginRight: 10, fontSize: 18 }} />, link: 'https://anthonyjcampbell.com', external: true,
    },
    {
      title: 'GITHUB', icon: <FaGithub style={{ marginRight: 10 }} />, link: 'https://github.com/anthonyjcampbell', external: true,
    },
    { title: 'CONTACT', color: '#f442e5', link: '/contact' },
  ],
};
