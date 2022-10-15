import { Navbar, NavLink } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconRocket } from '@tabler/icons';
import { useRouter } from 'next/router';
import { CONFIGURATION } from '../../../configuration';
import UserNavbarSegment from './DefaultUserMenu';

type DefaultNavbarProps = {
  userAvatar?: string;
  userEmail?: string;
  signOut: () => void;
};

const getLinkProps = (href: string, currentPath: string) => {
  return {
    component: NextLink,
    href,
    active: currentPath.includes(href) ? true : false,
  };
};

export default function DefaultNavbar({ userAvatar, userEmail, signOut }: DefaultNavbarProps) {
  const router = useRouter();

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="md">
        <NavLink
          label="Projects"
          icon={<IconRocket stroke={1.5} />}
          {...getLinkProps(CONFIGURATION.PATHS.PROJECTS.INDEX, router.pathname)}
        />
      </Navbar.Section>
      <Navbar.Section>
        <UserNavbarSegment avatar={userAvatar} email={userEmail} signOut={signOut} />
      </Navbar.Section>
    </Navbar>
  );
}
