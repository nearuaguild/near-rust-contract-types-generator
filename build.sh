RUSTFLAGS='-C link-arg=-s'  cargo build --all --target wasm32-unknown-unknown --release

cp ./target/wasm32-unknown-unknown/release/near_rust_contract_types_generator.wasm ./res/contract.wasm