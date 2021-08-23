const gateway = {
    0: "Dispatch",
    1: "Heartbeat",
    2: "Identify",
    3: "Presence Update",
    4: "Voice State Update",
    6: "Resume",
    7: "Reconnect",
    8: "Request Guild Members",
    9: "Invalid Session",
    10: "Hello",
    11: "Heartbeat ACK"
}

const gatewayAlias = {
    Dispatch: 0,
    Heartbeat: 1,
    HeartbeatACK: 11,
    Hello: 10,
    Identify: 2,
    InvalidSession: 9,
    PresenceUpdate: 3,
    Reconnect: 7,
    RequestGuildMembers: 8,
    Resume: 6,
    VoiceStateUpdate: 4,
}

module.exports = { gateway, gatewayAlias };