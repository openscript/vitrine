import { Navbar } from '@mantine/core';
import UserNavbarSegment from './DefaultUserMenu';

type DefaultNavbarProps = {
  userEmail?: string;
};

export default function DefaultNavbar({ userEmail }: DefaultNavbarProps) {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="md">
        Test
      </Navbar.Section>
      <Navbar.Section>
        <UserNavbarSegment email={userEmail} />
      </Navbar.Section>
    </Navbar>
  );
}
