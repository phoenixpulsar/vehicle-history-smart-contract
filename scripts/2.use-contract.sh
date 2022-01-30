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
# Signer can be any valid account, we can use OWNER or the same account CONTRACT

# echo ---------------------------------------------------------
# echo " Calling addVehicle Method"
# echo ---------------------------------------------------------
# near call $CONTRACT addVehicle '{"year":"2013",  "make": "Mini", "model": "Cooper S",  "owner": "phoenixpulsar.testnet", "dateAcquired": "Feb 01, 2015", "vehicleNotes": "Used"}' --accountId $OWNER
# near call $CONTRACT addVehicle '{"year":"2020",  "make": "Porsche", "model": "911",  "owner": "phoenixpulsar.testnet", "dateAcquired": "Mar 01, 2020", "vehicleNotes": "New"}' --accountId $OWNER
# near call $CONTRACT addVehicle '{"year":"2018",  "make": "Ford", "model": "Raptor",  "owner": "phoenixpulsar.testnet", "dateAcquired": "Oct 10, 2019", "vehicleNotes": "Used"}' --accountId $OWNER

# ------------------------------------
# Add Vehicle Service 
# ------------------------------------

# Uncomment lines below and run script to add Service (need vehicle id from above ID)

# echo ---------------------------------------------------------
# echo " Calling addService Method"
# echo ---------------------------------------------------------
# near call $CONTRACT addService '{"vehicleId": "80733686", "serviceDate": "Oct 11 2020",  "serviceNotes": "Serpentine Belt"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733696", "serviceDate": "Feb 11 2020",  "serviceNotes": "Flat Tire"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733703", "serviceDate": "Oct 11 2020",  "serviceNotes": "Change Oil"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733686", "serviceDate": "Nov 1 2015",  "serviceNotes": "Air Filter Change"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733696", "serviceDate": "Mar 1 2018",  "serviceNotes": "Detailed"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733703", "serviceDate": "Dec 1 2019",  "serviceNotes": "Check Engine Light"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733686", "serviceDate": "Sep 5 2015",  "serviceNotes": "Change Oil"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733696", "serviceDate": "Apr 8 2018",  "serviceNotes": "Clean Engine"}' --accountId $CONTRACT
# near call $CONTRACT addService '{"vehicleId": "80733703", "serviceDate": "Jul 21 2019",  "serviceNotes": "Oil Leak"}' --accountId $CONTRACT
echo
echo ---------------------------------------------------------
echo "Goodbye"
echo ---------------------------------------------------------
echo
exit 0
