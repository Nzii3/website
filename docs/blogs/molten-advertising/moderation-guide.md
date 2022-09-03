---
title: Moderation Guide
description: The modmail guide for Molten Advertising (moderation team only)
---

import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../../src/components/DiscordComponent";

:::note Overview
In this guide, you will learn how to do your **tasks**, **moderate advertisements** efficently, and everything there is to being in the **Molten Advertising Moderation Team**.
:::

## Tasks
Your tasks as a member of the **Moderation Team** consists of (but not limited to):

  - Issue **10** <u>valid</u> advertisement warnings
    - *Checks for advertisement warnings are done every* **Saturday Morning PST**
  - Moderate <span style={{color: '#5865f2'}}>#💬︱lounge</span>
  - Handle [Modmail](./modmail-guide.md) **threads**
  - Handle [Modmail](./modmail-guide.md) **reports** (and other reports)

## Advertisement Warnings

:::caution Warning
Make sure to **read advertisements** before you issue an advertisement warning (ad warn) and **don't** issue false warnings! This can result in a strike or a removal from the Moderation Team
:::
<details className="customdetails">
<summary>🔑 Key</summary>

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>

### Commands

:::tip
The commands we use for advertisement warnings are mainly slash commands. **Make sure you're using the latest version of Discord**!

> When warning a member and they reach **2 ad warnings**, warn them with **Server Manager** bot the expiration being **7 days**:
> `/warn member:id custom_reason:2aw duration: 7d moderator_hidden:True`
:::

| Usage | Description |
| ----------------------- | ----------- |
| ⭐ <code>/adwarn &lt;member&gt &lt;reason&gt &lt;channel&gt [belongs_to_channel] [notes]</code> | Issue an advertisement warning |
| <code>>case &lt;warning_id&gt</code> | View an advertisement warning by ID |
| <code>>delwarn &lt;warning_id&gt</code> | Delete an advertisement warning by ID |


<DiscordComponent>
  <DiscordMessage profile="moltensutilities">
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        adwarn
      </DiscordInteraction>
    </div>
      <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention>
      <DiscordEmbed embedTitle="Advertisement Warning" authorIcon="/img/moltenadvertising.gif" authorName="Molten Advertising - Ad Moderation" borderColor="#e74c3c" timestamp="12/24/2022" footerIcon="/img/moltensutilities.png">
        🚩 <strong>Reason:</strong> Lack of description
        <br/>
        #️⃣ <strong>Channel:</strong> <span className="mention">#🌎︱unlimited-advertising</span>
        <br/>
        ⚠️ <strong>Total Warnings:</strong> 1
        <span slot="footer">Warning ID: dL590f79hk38210</span>
      </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

<br/>

<details className="customdetails">
<summary>⭐ Command Breakdown</summary>

<details className="customdetails">
<summary>Command Explanation</summary>

The `/adwarn` command sends a message in the <span className="mention">#🚨︱open-moderation</span> channel and is stored in the database of **Molten's Utilities**. A **warning ID** is random generated ID which is _12 characters long_. This ID is unique to every advertisement warning, users can find this ID at the embed footer of the ad warning message *and* direct message they get. Users can message the modmail bot <span className="mention">@Molten Support#3319</span> to appeal this warning. These warnings are stored for **7 days** then removed (expired). Users are notified of this expiration.

</details> 

<details className="customdetails">
<summary>Command Arguments</summary>

*These are the arguments that aren't self explanatory*

> `belongs_to_channel` - This argument is only required and used when you use the `Incorrect Channel` preset reason. This is the channel the advertisement would belong to.

> `notes` - This argument is displayed as an embed field on the ad warning embed. This is typically not used unless you need to provide more context. **Example below**.

![Example image](../../assets/adwarningexample.png)

</details> 

</details>

