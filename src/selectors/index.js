import { createSelector } from '@reduxjs/toolkit';
import { countBy } from 'lodash';

const getMessages = (state) => state.messages.messages;
export const getChannels = (state) => state.channels.channels;

export const getCurrentChannelId = (state) => state.app.currentChannelId;

export const getModalName = (state) => state.app.modalName;

export const getCurrentChannelMessages = createSelector(
  [getCurrentChannelId, getMessages],
  (currentChannelId, messages) => messages
    .filter(({ channelId }) => channelId === currentChannelId),
);

export const getCurrentChannel = createSelector(
  [getCurrentChannelId, getChannels],
  (currentChannelId, channels) => channels.find((channel) => channel.id === currentChannelId),
);

export const getCountMessagesCurrentChannel = createSelector(
  [getCurrentChannelId, getMessages],
  (currentChannelId, messages) => messages.filter(
    ({ channelId }) => channelId === currentChannelId,
  ).length,
);

export const getCountsMessages = createSelector(
  getMessages,
  (messages) => countBy(messages, (item) => item.channelId),
);
