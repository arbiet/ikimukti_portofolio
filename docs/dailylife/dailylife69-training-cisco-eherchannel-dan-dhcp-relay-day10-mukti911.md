---
title: Dailylife - Cisco Training - EtherChannel and DHCP Relay
createTime: 2023/01/08
permalink: /dailylife/dailylife69-training-cisco-eherchannel-and-dhcp-relay-day10/
icon: network-wired
tags:
- DailyLife
- Cisco
- Training
- EtherChannel
- DHCP Relay
author:
- name: "Firmansyah Mukti Wijaya"
  email: "ikimukti@gmail.com"
  url: "https://ikimukti.com"
lang: en-US
cover: /image/dailylife/cover-day10.png
sticky: false
draft: false
index: true
excerpt: "Experience from Cisco training covering EtherChannel and DHCP Relay with BestPath Network. Cisco training is essential for IT professionals."
---

# Dailylife - Cisco Training - EtherChannel and DHCP Relay
![Cover Image|400x0](/image/dailylife/cover-day10.png 'Cover Image')

Greetings,

## A. Introduction

This time, I want to share my experience. Today, I continued my Cisco training from BestPath Network, with trainers Mas Fatchurohman and Mas Rizka Budiman. The topic was about what EtherChannel and DHCP Relay are and how to implement them on Cisco devices.

## B. Background

This training was held to gain knowledge about Cisco and to get the opportunity to participate in its certification.

## C. Purpose & Objective

To gain experience and a basic understanding of Cisco and its devices, and to be able to implement them in the workplace.

## D. Schedule

- 08.00 – 12.00 < Training
- 13.00 – 15.30 < Training
- 16.00 – 17.30 < Training
- 19.30 – 22.00 < Training

## E. Materials Delivered
![Material Image|400x0](/image/dailylife/network-part-2-1.png 'Material Image')

### EtherChannel on Cisco

EtherChannel is the combination of several links on a switch into a single virtual link. The goal is to combine available bandwidth and provide physical redundancy. With EtherChannel, several links are grouped into a port-channel that can be configured on its virtual interface as needed.

**EtherChannel Negotiation**

An EtherChannel can be built using one of three mechanisms:

- **PAgP**: Cisco’s proprietary
- **LACP**: open standard IEEE 802.3ad
- **Static Persistence ("on")**: No negotiation

LACP helps protect against switching loops caused by misconfiguration. When enabled, EtherChannel will only form after negotiation between both switches is successful. However, this negotiation can cause some delay.

To configure EtherChannel using LACP, each side must be set to either active or passive mode. An interface configured as active will initiate EtherChannel negotiation. An interface in passive mode will respond to LACP requests from an active interface. For PAgP, the modes are desirable (initiates negotiation) and auto (responds to PAgP requests).

**Example EtherChannel Configuration:**

```shell
S1(config)#interface range f0/13 -15
S1(config-if-range)#channel-group 1 mode ?
	active      Enable LACP unconditionally
	auto        Enable PAgP only if a PAgP device is detected
	desirable   Enable PAgP unconditionally
	on          Enable EtherChannel only
	passive     Enable LACP only if a LACP device is detected
S1(config-if-range)#channel-group 1 mode active
```

Note: The port-channel interface is a virtual interface that is automatically created when EtherChannel is enabled on an interface. To verify the created EtherChannel, use the command `show etherchannel summary`.

**EtherChannel Load-Balancing**

Another consideration when implementing EtherChannel is the load-balancing method. EtherChannel offers load-balancing per frame, not per bit. The switch decides which member link a frame will traverse based on several methods, such as:


- dst-ip
- dst-mac
- dst-port
- src-dst-ip
- src-dst-mac
- src-dst-port
- src-ip
- src-mac
- src-port
- dst-mixed-ip-port
- src-mixed-ip-port
- src-dst-mixed-ip-port

The best method is src-dst-mixed-ip-port, but not all IOS versions support this method.

**Example of EtherChannel Implementation:**
![EtherChannel Implementation|400x0](/image/dailylife/etherchannel-implementation.png 'EtherChannel Implementation')

1. Create a topology with two multilayer switches.
2. Configure EtherChannel on all L3 Switch interfaces using mode "on":

```shell
Switch#conf t
Switch(config)#int range fa0/1-3
Switch(config-if-range)#no switchport
Switch(config-if-range)#channel-group 1 mode on
Switch(config-if-range)#exit
```

3. Set IP addresses for the port-channel interfaces so they are on the same network:

```shell
Switch(config)#int port-channel 1
Switch(config-if)#ip address 1.1.1.1 255.255.255.0
Switch(config)#int port-channel 1
Switch(config-if)#ip address 1.1.1.2 255.255.255.0
```

4. Check the port interface indicator lights, make sure they are green. Try pinging between switches, and ensure it is successful.

### DHCP Relay on Cisco

DHCP relay is a protocol that relays DHCP messages between clients and servers on different IP networks. DHCP relay saves administrators from having to install a DHCP server on every subnet. In large networks, DHCP relay is very helpful for IP distribution.

**How DHCP Relay Works:**

1. DHCP Discover packets are directed to the DHCP server on a different segment.
2. The DHCP server sends a DHCP Offer, which is forwarded to the PC.
3. The PC replies with a DHCP Request, which is forwarded to the server.
4. The server sends a DHCP Ack, which is forwarded to the PC.

**Example of DHCP Relay Implementation:**

![DHCP Relay Implementation|400x0](/image/dailylife/dhcp-relay-implementation.png 'DHCP Relay Implementation')

- **As DHCP Server**
	- Router0 : fa0/0 10.10.10.1/24, fa0/1 20.20.20.1/30
- **As DHCP Relay**
	- Router1 : fa0/0 20.20.20.2/30, fa0/1 30.30.30.1/25
- **Server** : 10.10.10.254/24
- **PC19/PC20** : DHCP Request

**Configuration on Router2:**

```shell
Router(config)#interface fa0/0
Router(config-if)#ip address 10.10.10.1 255.255.255.0
Router(config-if)#no sh
Router(config-if)#exit
Router(config)#interface fa0/1
Router(config-if)#ip address 20.20.20.1 255.255.255.128
Router(config-if)#no sh
Router(config)#ip route 0.0.0.0 0.0.0.0 20.20.20.2
```

**DHCP Server Configuration on Router2:**

```shell
Router(config)#ip dhcp pool Mukti911
Router(dhcp-config)#network 30.30.30.0 255.255.255.128
Router(dhcp-config)#default-router 30.30.30.1
Router(dhcp-config)#dns-server 10.10.10.254
Router(dhcp-config)#exit
Router(config)#ip dhcp excluded-address 30.30.30.1
```

**Configuration on Router3:**

```shell
Router1(config)#interface fa0/0
Router1(config-if)#ip address 20.20.20.2 255.255.255.128
Router1(config-if)#no sh
Router1(config-if)#exit
```

**DHCP Relay Configuration on Router1:**

```shell
R1(config)#interface fa0/1
R1(config-if)#ip helper-address 20.20.20.1
R1(config-if)#exit
```

Try making a request from the client; if it receives an IP from the server, the configuration was successful.

## F. Closing

That's all I did throughout the day, and perhaps some of the material delivered by Mas Fatchurohman and Rizka Budiman. That's all from me, thank you.

Best regards.
