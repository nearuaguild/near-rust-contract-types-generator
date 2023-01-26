<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Near Protocol | Contract Types Generator</h2>

  <p align="center">
    A working example of generating Typescript types from Near Protocol smart contract written on Rust
    <br />
    <br />
    <a href="https://github.com/nearuaguild"> Explore other examples</a>
    ·
    <a href="https://github.com/nearuaguild/near-rust-contract-types-generator/issues">Report Bug</a>
  </p>
</div>

## Developed by

![Near Ukrainians Guild cover](./images/cover.png)

**Near Ukrainians Guild** is a fast-growing guild aimed at providing high-quality educational content and assistance to grow a strong community of Ukrainian developers/entrepreneurs in the Near Protocol ecosystem

[![Twitter][twitter]][twitter-url]
[![Youtube][youtube]][youtube-url]
[![Telegram Chat][telegram-chat]][telegram-chat-url]
[![Telegram Channel][telegram-channel]][telegram-channel-url]
[![Medium][medium]][medium-url]
[![Github][github]][github-url]

---

<!-- ABOUT THE PROJECT -->

## About The Project

This example demonstrates the process of generating TypeScript typed files based on Near Protocol smart contract

- `main` branch contains plain contract with an example of generator usage

- `only_generator` branch contains script for generating types & example of output in `/type_generator/example/typescript`

### Pros

- Contract public functions are automatically generated
- Output type file contains `Contract` class with all functions

### Cons

- Custom `struct` and `enum` must be decorated with proc macro `#[witgen]`
- Type `&str` is not supported (but you can use `String`)

### Built With

- [![Rust][rust]][rust-url]
- [witgen (v0.15.0)](https://docs.rs/witgen/latest/witgen/)

---

<!-- GETTING STARTED -->

## Getting Started

💡 _Before you begin, make sure you have the following installed_

- [Rust](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- [Cargo](https://github.com/rust-lang/cargo#compiling-from-source)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)

### Installation

Follow these simple instructions to setup the required dependencies before usage

1. Clone the repo
   ```sh
   git clone https://github.com/nearuaguild/near-rust-contract-types-generator.git
   ```
2. Checkout to branch `only_generator`
   ```sh
   git switch only_generator
   ```
3. Copy the folder to your project
   ```sh
   cp /type_generator/ /PATH_TO_YOUR_PROJECT_ROOT/
   ```
4. Add `witgen` lib to your dependencies in `Cargo.toml`
   ```toml
   [dependencies]
   witgen = "0.15.0"
   ```
5. Install `witme` package
   ```sh
   cargo install witme --version 0.2.6 --force
   ```

---

<!-- USAGE EXAMPLES -->

## Usage

Follow these simple instructions to generate Typescript interface files

1. Import `witgen` crate to `lib.rs`

   ```rust
   use witgen::witgen;
   ```

2. Decorate with `#[witgen]` macro your contract types (example in `/src/lib.rs`)

   ```rust
   #[witgen]
   #[derive(BorshSerialize, BorshDeserialize, Clone)]
   pub enum Kind {
      OK { code: u8 },
      FAIL { code: u8, text: String },
   }
   ```

   ```rust
   #[derive(BorshSerialize, BorshDeserialize, PanicOnDefault, Clone)]
   #[witgen]
   pub struct Config {
      number: u16,
      kind: Kind,
   }
   ```

3. Execute script from the root smart contract folder
   ```sh
   ./type_generator/generate.sh
   ```
4. Copy generated types to your TypeScript project
   ```sh
   cp ./type_generator/typescript/ /PATH_TO_TYPESCRIPT_PROJECT/
   ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Built with -->

[rust]: https://img.shields.io/badge/rust-000000?style=for-the-badge&logo=rust&logoColor=white
[rust-url]: https://www.rust-lang.org/

<!-- Socials -->

[twitter]: https://img.shields.io/badge/news-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[youtube]: https://img.shields.io/badge/broadcasting-282828?style=for-the-badge&logo=youtube&logoColor=ff0000
[medium]: https://img.shields.io/badge/articles-202020?style=for-the-badge&logo=medium&logoColor=ffffff
[telegram-chat]: https://img.shields.io/badge/chat-229ED9?style=for-the-badge&logo=telegram&logoColor=white
[telegram-channel]: https://img.shields.io/badge/channel-229ED9?style=for-the-badge&logo=telegram&logoColor=white
[github]: https://img.shields.io/badge/code-000000?style=for-the-badge&logo=github&logoColor=ffffff
[twitter-url]: https://twitter.com/nearuaguild
[youtube-url]: https://www.youtube.com/@nearprotocolukraineguild4064
[medium-url]: https://medium.com/near-protocol-ua
[telegram-chat-url]: https://t.me/nearprotocolua
[telegram-channel-url]: https://t.me/nearprotocoluachannel
[github-url]: https://github.com/nearuaguild
