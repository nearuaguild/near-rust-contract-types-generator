use near_sdk::{
    borsh::{BorshDeserialize, BorshSerialize},
    near_bindgen, PanicOnDefault,
};
use serde::{Deserialize, Serialize};
use witgen::witgen;

#[witgen]
#[derive(BorshSerialize, BorshDeserialize, Deserialize, Serialize, Clone)]
pub enum Kind {
    OK { code: u8 },
    FAIL { code: u8, text: String },
}

#[witgen]
#[derive(BorshSerialize, BorshDeserialize, Deserialize, Serialize, PanicOnDefault, Clone)]
pub struct Config {
    number: u16,
    kind: Kind,
}

#[near_bindgen]
#[derive(BorshSerialize, BorshDeserialize, PanicOnDefault)]
struct Contract {
    name: String,
    age: u8,
    config: Option<Config>,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn init() -> Self {
        Self {
            age: 0,
            name: String::from("Example"),
            config: None,
        }
    }

    pub fn get_age(&self) -> u8 {
        self.age
    }

    pub fn get_name(&self) -> String {
        self.name.clone()
    }

    pub fn get_kind(&self) -> Option<Kind> {
        match &self.config {
            Some(config) => Some(config.kind.clone()),
            None => None,
        }
    }

    pub fn update_age(&mut self, age: u8) {
        self.age = age;
    }
}
