import { Navbar } from '@mantine/core';
import UserNavbarSegment from './DefaultUserMenu';

type DefaultNavbarProps = {
  userAvatar?: string;
  userEmail?: string;
  signOut: () => void;
};

export default function DefaultNavbar({ userAvatar, userEmail, signOut }: DefaultNavbarProps) {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="md">
        Test
      </Navbar.Section>
      <Navbar.Section>
        <UserNavbarSegment avatar={userAvatar} email={userEmail} signOut={signOut} />
      </Navbar.Section>
    </Navbar>
  );
}
