#!/bin/bash
witme_version=$(witme --version)
dir=$(dirname $0)

if [ "$dir" != "./type_generator" ];
then
    echo -e "\033[0;31mScript must be called only from root folder, return back and try ./type_generator/generate.sh\033[0m"
    exit 1
fi

echo "Using version of $witme_version";

if [ "$witme_version" != "witme 0.2.6" ];
then
    echo -e "\033[0;33mYou're using not-tested version of witme, output may differ (recommended version is 0.2.6)\033[0m"
fi

echo "Removing previously generated wit & typescript folder"
# remove previous wit & output folder
rm -f "$dir/contract_types.wit"
rm -rf "$dir/typescript"

echo "Generating wit from contract"
witme near wit -p "$dir/near_sdk_types.wit" -o "$dir/contract_types.wit"

echo "Generating typescript folder"
witme near ts -i "$dir/contract_types.wit" -o "$dir/typescript"

echo -e "\033[0;32mDone!\033[0m"