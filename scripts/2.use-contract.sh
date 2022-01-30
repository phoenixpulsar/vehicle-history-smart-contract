#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"


# ------------------------------------
# Add Vehicle 
# ------------------------------------

# Uncomment lines below and run script to add Vehicle to Contract

# echo ---------------------------------------------------------
# echo " Calling addVehicle Method"
# echo ---------------------------------------------------------
# near call $CONTRACT addVehicle '{"year":"2013",  "make": "Mini", "model": "Cooper S",  "owner": "phoenixpulsar.testnet", "dateAcquired": "Dec 01, 2015", "vehicleNotes": "Used"}' --accountId $CONTRACT

# ------------------------------------
# Add Vehicle Service 
# ------------------------------------

# Uncomment lines below and run script to add Service (need vehicle id from above ID)

# echo ---------------------------------------------------------
# echo " Calling addService Method"
# echo ---------------------------------------------------------
# near call $CONTRACT addService '{"vehicleId": "77953292", "serviceDate": "Jan 11 2022",  "serviceNotes": "Serpentine Belt"}' --accountId $CONTRACT
#  near call $CONTRACT addService '{"vehicleId": "78533855", "serviceDate": "Jan 11 2022",  "serviceNotes": "Flat Tire"}' --accountId $CONTRACT


echo
echo ---------------------------------------------------------
echo "Goodbye"
echo ---------------------------------------------------------
echo
exit 0
