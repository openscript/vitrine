import { Navbar } from '@mantine/core';
import UserNavbarSegment from './DefaultUserMenu';

type DefaultNavbarProps = {
  userEmail?: string;
  signOut: () => void;
};

export default function DefaultNavbar({ userEmail, signOut }: DefaultNavbarProps) {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="md">
        Test
      </Navbar.Section>
      <Navbar.Section>
        <UserNavbarSegment email={userEmail} signOut={signOut} />
      </Navbar.Section>
    </Navbar>
  );
}
