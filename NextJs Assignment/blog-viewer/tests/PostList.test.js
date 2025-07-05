import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';
import React from 'react';

const mockPosts = [
  { id: 1, title: 'First Post', content: '...' },
  { id: 2, title: 'Second Post', content: '...' },
];

test('renders post titles', () => {
  render(<PostList posts={mockPosts} onPostClick={() => {}} />);
  expect(screen.getByText('First Post')).toBeInTheDocument();
  expect(screen.getByText('Second Post')).toBeInTheDocument();
});

test('calls onPostClick when a post is clicked', () => {
  const handleClick = jest.fn();
  render(<PostList posts={mockPosts} onPostClick={handleClick} />);
  fireEvent.click(screen.getByText('First Post'));
  expect(handleClick).toHaveBeenCalledWith(mockPosts[0]);
});
