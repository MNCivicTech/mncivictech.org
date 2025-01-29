import { type Block, type KnownBlock, WebClient } from "@slack/web-api";

export enum MessageType {
  Project = "Project",
  Contact = "Contact",
  Introduction = "Introduction",
}

export interface MessageData {
  [MessageType.Contact]: {
    fullName: string;
    email: string;
    message: string;
  };
  [MessageType.Project]: {
    fullName: string;
    email: string;
    explanation: string;
    requirements: string[];
    progress: string;
    helpNeeded?: string[];
    anythingElse?: string;
  };
  [MessageType.Introduction]: {
    fullName: string;
    email: string;
    skills?: string[];
    linkedin?: string;
    github?: string;
    interest?: string;
    currentCompany?: string;
    currentRole?: string;
    disciplines?: string[];
  };
}

export async function sendSlackMessage<T extends MessageType>(
  type: T,
  data: MessageData[T],
): Promise<void> {
  const { text, blocks } = buildMessage(type, data);
  await sendMessage(getChannel(type), text, blocks);
}

function getChannel(type: MessageType) {
  switch (type) {
    case MessageType.Contact:
      return process.env.SLACK_CONTACT_CHANNEL ?? "";

    case MessageType.Introduction:
      return process.env.SLACK_INTRODUCTION_CHANNEL ?? "";

    case MessageType.Project:
      return process.env.SLACK_PROJECT_CHANNEL ?? "";

    default:
      throw new Error("Invalid message type");
  }
}

function buildMessage<T extends MessageType>(type: T, data: MessageData[T]) {
  const messageBuilder: {
    [K in MessageType]: (data: MessageData[K]) => {
      text: string;
      blocks: (Block | KnownBlock)[];
    };
  } = {
    [MessageType.Contact]: (data) => ({
      text: "New Contact",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":mailbox: New Contact Submission :mailbox:",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:* ${data.fullName}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:* ${data.email}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*:envelope: Message:* \n>${data.message}`,
          },
        },
      ],
    }),
    [MessageType.Introduction]: (data) => ({
      text: "New Introduction",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":wave: New Introduction :wave:",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:* ${data.fullName}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:* ${data.email}`,
            },
          ],
        },
        ...(data.currentCompany || data.currentRole
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*:briefcase: Current:* ${
                    data.currentRole ?? "N/A"
                  } at ${data.currentCompany ?? "N/A"}`,
                },
              },
            ]
          : []),
        {
          type: "divider",
        },
        ...(data.linkedin || data.github
          ? [
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: data.linkedin
                      ? `:linkedin: <https://www.linkedin.com/in/${data.linkedin}|LinkedIn>`
                      : "",
                  },
                  {
                    type: "mrkdwn",
                    text: data.github
                      ? `:github: <https://www.github.com/${data.github}|GitHub>`
                      : "",
                  },
                ],
              },
            ]
          : []),
        {
          type: "divider",
        },
        ...(data.skills?.length
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "*:trophy: Skills:*",
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: data.skills.map((skill) => `>• ${skill}`).join("\n"),
                },
              },
            ]
          : []),
        {
          type: "divider",
        },
        ...(data.disciplines?.length
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "*:star: Disciplines:*",
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: data.disciplines
                    .map((discipline) => `>• ${discipline}`)
                    .join("\n"),
                },
              },
            ]
          : []),
        ...(data.interest
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*:zap: Interest:* ${data.interest}`,
                },
              },
            ]
          : []),
        {
          type: "divider",
        },
      ],
    }),
    [MessageType.Project]: (data) => ({
      text: "New Project Idea",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":bulb: New Project Pitch Submission :bulb:",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:* ${data.fullName}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:* ${data.email}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*:books: Project Explanation:* \n>${data.explanation}`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*:white_check_mark: Requirements Met:*",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: data.requirements.map((req) => `>• ${req}`).join("\n"),
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*:chart_with_upwards_trend: Progress:* ${data.progress}`,
          },
        },
        ...(data.helpNeeded?.length
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "* :mag: Help Needed:*",
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: data.helpNeeded.map((help) => `>• ${help}`).join("\n"),
                },
              },
            ]
          : []),
        ...(data.anythingElse
          ? [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `* :envelope: Anything Else:* \n>${data.anythingElse}`,
                },
              },
            ]
          : []),
        {
          type: "divider",
        },
      ],
    }),
  };

  if (messageBuilder[type] == null) {
    throw new Error(`Invalid Message Type: ${type}`);
  }

  return messageBuilder[type](data);
}

async function sendMessage(
  channel: string,
  text: string,
  blocks: (Block | KnownBlock)[],
): Promise<void> {
  const slackClient = new WebClient(process.env.SLACK_TOKEN);

  try {
    const response = await slackClient.chat.postMessage({
      channel,
      text,
      blocks,
      mrkdwn: true,
    });

    if (response.ok) {
      console.log(`Message sent to channel ${channel} with ts: ${response.ts}`);
    } else {
      console.error("Failed to send message:", response.error);
    }
  } catch (error) {
    console.error("Error sending Slack message:", error);
    throw new Error("Error sending Slack message", { cause: error });
  }
}
