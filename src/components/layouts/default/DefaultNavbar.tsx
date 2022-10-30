import { Navbar, NavLink } from '@mantine/core';
import { IconRocket } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { CONFIGURATION } from '../../../configuration';
import DefaultUserMenu from './DefaultUserMenu';

type DefaultNavbarProps = {
  userAvatar?: string;
  userEmail?: string;
  signOut: () => void;
};

const getLinkProps = (href: string, currentPath: string) => {
  return {
    component: Link,
    href,
    active: currentPath.includes(href) ? true : false,
  };
};

export default function DefaultNavbar({ userAvatar, userEmail, signOut }: DefaultNavbarProps) {
  const router = useRouter();
  const intl = useIntl();

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="md">
        <NavLink
          label={intl.formatMessage({ id: 'page.my-projects.title' })}
          icon={<IconRocket stroke={1.5} />}
          {...getLinkProps(CONFIGURATION.PATHS.MY_PROJECTS.INDEX, router.pathname)}
        />
      </Navbar.Section>
      <Navbar.Section>
        <DefaultUserMenu avatar={userAvatar} email={userEmail} signOut={signOut} />
      </Navbar.Section>
    </Navbar>
  );
}
