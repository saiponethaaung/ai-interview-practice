"use client";
import {
  IconClipboardList,
  IconDashboard,
  IconFiles,
  IconKey,
  IconLogout,
  IconSettings,
  IconVideo,
} from "@tabler/icons-react";
import { Group, Text } from "@mantine/core";
import classes from "./sidebar.module.scss";
import Link from "next/link";

const data = [
  { link: "/app", label: "Dashboard", icon: IconDashboard },
  { link: "/app/interview", label: "Mock Interview", icon: IconVideo },
  { link: "/app/job", label: "Job", icon: IconClipboardList },
  { link: "/app/file", label: "File", icon: IconFiles },
  { link: "/app/biography", label: "Biography", icon: IconKey },
  { link: "/app/settings", label: "Settings", icon: IconSettings },
];

export default function SidebarLayout() {
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          {/* <MantineLogo size={28} inverted style={{ color: "white" }} /> */}
          <Text c="white">LOGO</Text>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <Link
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
