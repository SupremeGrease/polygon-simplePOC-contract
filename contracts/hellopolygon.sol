// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HelloPolygon {
    string public message = "Hello from Polygon!";

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
