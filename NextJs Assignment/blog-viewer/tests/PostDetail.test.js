import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';
import React from 'react';

const post = { id: 1, title: 'First Post', content: 'Prasang' };

test('renders post title and content', () => {
  render(<PostDetail post={post} onClose={() => {}} />);
  expect(screen.getByText('First Post')).toBeInTheDocument();
  expect(screen.getByText('Prasang')).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const handleClose = jest.fn();
  render(<PostDetail post={post} onClose={handleClose} />);
  fireEvent.click(screen.getByText('Close'));
  expect(handleClose).toHaveBeenCalled();
});