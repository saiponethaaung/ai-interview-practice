"use client";
import { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";

const data = [
  { link: "/app", label: "Dashboard", icon: IconDashboard },
  { link: "/app/interview", label: "Mock Interview", icon: IconVideo },
  { link: "/app/job", label: "Job", icon: IconClipboardList },
  { link: "/app/file", label: "File", icon: IconFiles },
  { link: "/app/biography", label: "Biography", icon: IconKey },
  { link: "/app/settings", label: "Settings", icon: IconSettings },
];

export default function SidebarLayout() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const pathname = usePathname();

  switch (pathname) {
    case "/app":
      if (activeMenu !== "Dashboard") setActiveMenu("Dashboard");
      break;
    case "/app/interview":
      if (activeMenu !== "Mock Interview") setActiveMenu("Mock Interview");
      break;
    case "/app/job":
      if (activeMenu !== "Job") setActiveMenu("Job");
      break;
    case "/app/file":
      if (activeMenu !== "File") setActiveMenu("File");
      break;
    case "/app/biography":
      if (activeMenu !== "Biography") setActiveMenu("Biography");
      break;
    case "/app/settings":
      if (activeMenu !== "Settings") setActiveMenu("Settings");
      break;
    default:
      break;
  }

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === activeMenu ? true : undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={2} />
      <span className={classes.linkLabel}>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          {/* <MantineLogo size={28} inverted style={{ color: "white" }} /> */}
          <Text c="--text-dark" className={classes.headerTitle}>AI Interview</Text>
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
