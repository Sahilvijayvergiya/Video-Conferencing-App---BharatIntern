turnConfig = {
    iceServers: [{
        urls: [ "stun:bn-turn1.xirsys.com" ]
     }, {
        username: "uPyJxc2h0Zd9svkuDVZMa7dUcvZKZHztRtXnrP7d0LaMjLrj4Y_nGb7b1-VZ2XLfAAAAAGTy_VxzYWhpbDI4MTI=",
        credential: "5c49e164-4971-11ee-99cc-0242ac140004",
        urls: [
            "turn:bn-turn1.xirsys.com:80?transport=udp",
            "turn:bn-turn1.xirsys.com:3478?transport=udp",
            "turn:bn-turn1.xirsys.com:80?transport=tcp",
            "turn:bn-turn1.xirsys.com:3478?transport=tcp",
            "turns:bn-turn1.xirsys.com:443?transport=tcp",
            "turns:bn-turn1.xirsys.com:5349?transport=tcp"
        ]
     }]     
}
