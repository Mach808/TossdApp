// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.28;

contract Toss {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner!");
        _;
    }

    // Allow owner to fund the contract
    function fundContract() external payable onlyOwner {}

    // View total funds in the contract
    function getContractBalance() external view returns (uint256) {
        return address(this).balance * 1 ether;
    }

    // Withdraw by owner
    function withdraw(uint256 amountInEth) external onlyOwner {
        uint256 amount = amountInEth * 1 ether; // convert ETH to wei
        require(
            amount <= address(this).balance,
            "Not enough funds in contract"
        );
        (bool sent, ) = payable(owner).call{value: amount}("");
        require(sent, "Withdraw failed");
    }

    event GamePlayed(address indexed player, bool win, uint256 amount);

    // Main game
    function Game(uint8 _choice) external payable {
        uint256 amount = msg.value;
        require(amount > 0, "Must send ETH to play");
        require(
            address(this).balance >= amount * 2,
            "Contract cannot cover winnings"
        );
        require(_choice == 0 || _choice == 1, "Choice must be 0 or 1");

        // Generate pseudo-random number (0 or 1)
        uint8 randomNum = uint8(
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.prevrandao,
                        block.timestamp,
                        msg.sender
                    )
                )
            ) % 2
        );
        bool win = (randomNum == _choice);
        if (win) {
            (bool sent, ) = payable(msg.sender).call{value: amount * 2}("");
            require(sent, "Failed to send winnings");
        }

        emit GamePlayed(msg.sender, win, amount);
    }
}
