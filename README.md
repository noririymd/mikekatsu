## DB 設計

## users table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            | null: false             |
| nickname           | string              | null: false,index: true |
| email              | devise のデフォルト   | null: false             |
| encrypted_password | devise のデフォルト   | null: false             |
| first_name         | string              | null: false             |
| last_name          | string              | null: false             |
| first_name_kana    | string              | null: false             |
| last_name_kana     | string              | null: false             |
| birth_date         | date                | null: false             |
| gender             | integer             | null: false             |
| prefecture_id      | integer             | null: false             |

### Association

* has_many :portfolios
* has_many :favorites
* has_many :messages
* has_one :profile

## profilers table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| description        | text                |                         |
| current_job        | string              |                         |
| job_history        | string              |                         |
| educational_background | string          |                         |
| award              | string              |                         |
| qualification      | string              |                         |
| user_id            | integer             | foreign_key: true       |

### Association

* belongs_to :user


## portfolios table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| portfolio          | string              | null: false             |
| name               | string              | null: false             |
| description        | text                | null: false             |
| language           | string              | null: false             |
| user_id            | integer             | foreign_key: true       |

### Association

* belongs_to :user
* has_many :tags
* has_many :portfolio_tags
* has_many :favorites
* has_many :messages


## tags table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| tag                | name                | null: false             |

### Association

* belongs_to :user
* has_many :portfolios


## portfolio_tags table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| portfolio_id       | integer             | foreign_key: true       |
| tag_id             | integer             | foreign_key: true       |

### Association

* belongs_to :user
* belongs_to :portfolio


## favorites table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| user_id            | integer             | foreign_key: true       |
| portfolio_id       | integer             | foreign_key: true       |

### Association

* belongs_to :user
* belongs_to :portfolio


## messages table

| Column             | Type                | Options                 |
| ------------------ | ------------------- | ----------------------- |
| id(PK)             | デフォルト            |                         |
| message            | text                | null: false             |
| user_id            | integer             | foreign_key: true       |
| receive_user_id    | integer             | foreign_key: {to_table: :users} |

### Association

* belongs_to :user
* belongs_to :portfolio




