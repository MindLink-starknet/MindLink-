"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-stark";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";
import { useTheme } from "next-themes";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";
import { devnet } from "@starknet-react/chains";
import { SwitchTheme } from "./SwitchTheme";
import { useAccount, useNetwork, useProvider } from "@starknet-react/core";
import { BlockIdentifier } from "starknet";


type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);
  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive
                  ? "!bg-gradient-nav !text-white active:bg-gradient-nav shadow-md"
                  : ""
              } py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col hover:bg-gradient-nav hover:text-white`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.network === devnet.network;

  const { provider } = useProvider();
  const { address, status, chainId } = useAccount();
  const { chain } = useNetwork();
  const [isDeployed, setIsDeployed] = useState(true);

  useEffect(() => {
    if (
      status === "connected" &&
      address &&
      chainId === targetNetwork.id &&
      chain.network === targetNetwork.network
    ) {
      provider
        .getClassHashAt(address)
        .then((classHash) => {
          if (classHash) setIsDeployed(true);
          else setIsDeployed(false);
        })
        .catch((e) => {
          console.error("contract check", e);
          if (e.toString().includes("Contract not found")) {
            setIsDeployed(false);
          }
        });
    }
  }, [
    status,
    address,
    provider,
    chainId,
    targetNetwork.id,
    targetNetwork.network,
    chain.network,
  ]);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#F5EFF5] via-[#E6D5E6] to-[#9CE0DB] rounded-xl flex items-center justify-center">
              <Image 
                src="/mindlink-logo.png" 
                alt="MindLink Logo" 
                width={28} 
                height={28}
                className="relative z-10"
              />
            </div>
          </Link>

          {/* Right Section: Navigation, Language & Connect */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            <Link 
              href="/how-it-works" 
              className="text-gray-600 hover:text-[#81638B] transition-colors text-sm"
            >
              How It Works?
            </Link>
            <Link 
              href="/dashboard-details" 
              className="text-gray-600 hover:text-[#81638B] transition-colors text-sm"
            >
              Dashboard
            </Link>

            {/* Language Selector */}
            <button className="flex items-center space-x-1 text-gray-600 hover:text-[#81638B] transition-colors">
              <span className="text-sm">🌐</span>
              <span className="text-sm font-medium">ES</span>
            </button>

            {/* Wallet Connection and Theme Switch */}
            <div className="flex items-center gap-2">
              {status === "connected" && !isDeployed ? (
                <span className="bg-[#8a45fc] text-[7px] px-1 py-0.5 text-white rounded-sm whitespace-nowrap">
                  Not Deployed
                </span>
              ) : null}
              <CustomConnectButton />
              <SwitchTheme
                className={`pointer-events-auto ${
                  isLocalNetwork ? "mb-1 lg:mb-0" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
