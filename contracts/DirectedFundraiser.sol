// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DirectedFundraiser {
    address public initiator;
    address public beneficiary;
    uint public goalAmount;
    uint public totalDonations;
    string public description;

    struct Donation {
        address donor;
        uint amount;
        string message;
        uint timestamp;
    }

    Donation[] public donations;

    event DonationReceived(address indexed donor, uint amount, string message, uint timestamp);
    event FundsWithdrawn(address indexed beneficiary, uint amount);
    event FundraiserCreated(address indexed initiator, address indexed beneficiary, uint goalAmount, string description);

    constructor(address _beneficiary, uint _goalAmount, string memory _description) {
        initiator = msg.sender;
        beneficiary = _beneficiary;
        goalAmount = _goalAmount;
        description = _description;

        emit FundraiserCreated(initiator, beneficiary, goalAmount, description);
    }

    function donate(string memory message) public payable {
        require(msg.value > 0, "Donation must be greater than 0");

        donations.push(Donation(msg.sender, msg.value, message, block.timestamp));
        totalDonations += msg.value;

        emit DonationReceived(msg.sender, msg.value, message, block.timestamp);
    }

    function withdrawFunds() public onlyBeneficiary {
        uint amount = address(this).balance;
        require(amount > 0, "No funds to withdraw");

        payable(beneficiary).transfer(amount);
        emit FundsWithdrawn(beneficiary, amount);
    }

    function getDonation(uint index) public view returns (address, uint, string memory, uint) {
        require(index < donations.length, "Invalid index");
        Donation memory d = donations[index];
        return (d.donor, d.amount, d.message, d.timestamp);
    }

    function getDonationCount() public view returns (uint) {
        return donations.length;
    }

    function getProgress() public view returns (uint) {
        if (goalAmount == 0) return 0;
        uint percent = (totalDonations * 100) / goalAmount;
        return percent > 100 ? 100 : percent;
    }

    function isGoalReached() public view returns (bool) {
        return totalDonations >= goalAmount;
    }

    modifier onlyBeneficiary() {
    require(msg.sender == beneficiary, "Only beneficiary can withdraw");
    _;
    }
}