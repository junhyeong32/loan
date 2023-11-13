<template>
  <header
    class="w-screen flex justify-between items-center px-12 h-[80px] fixed top-0 left-0 z-[1]"
  >
    <div class="text-3xl ml-4">더드림론</div>
    <nav class="sm:flex xs:hidden gap-10">
      <!-- text-primary -->
      <button @click="scrollView('section1')">상품안내</button>
      <button @click="scrollView('section2')">소개</button>
      <button @click="scrollView('section3')">진행절차</button>
      <button @click="scrollView('section4')">신청대상</button>
      <button @click="scrollView('section5')">대출상담신청</button>
    </nav>
    <img
      src="/hambuger.png"
      class="sm:hidden xs:block h-[25px] cursor-pointer"
      @click="menu = !menu"
    />

    <div
      class="sm:hidden xs:flex fixed top-0 w-screen h-screen flex-col items-center left-0 gap-20 text-white pt-[30px] px-[25px]"
      style="background: rgba(0, 0, 0, 0.85); opacity: 0.9"
      v-if="menu"
    >
      <!-- text-primary -->
      <div class="w-full flex justify-end">
        <img
          src="/x.png"
          @click="menu = !menu"
          class="w-[20px] cursor-pointer"
        />
      </div>
      <button @click="scrollView('section1')">상품안내</button>
      <button @click="scrollView('section2')">소개</button>
      <button @click="scrollView('section3')">진행절차</button>
      <button @click="scrollView('section4')">신청대상</button>
      <button @click="scrollView('section5')">대출상담신청</button>
    </div>
  </header>
  <main>
    <!-- 1 -->
    <section
      class="flex flex-col items-center main_section pt-[130px] section1"
    >
      <div class="wrapper flex flex-col items-center">
        <div class="text-center text-3xl">
          간편한 절차 당일대출 가능!<br />
          넉넉한 한도로 여유있게!
        </div>

        <div
          style="font-family: SEBANG_Gothic_Bold"
          class="bold sm:text-[60px] xs:text-[30px] text-primary"
        >
          최대 한도 2억!
        </div>
        <div
          style="font-family: SEBANG_Gothic_Bold"
          class="bold sm:text-[60px] xs:text-[30px] text-secondary"
        >
          저금리로 60개월까지~!
        </div>
        <button
          class="sm:w-[250px] xs:w-[150px] w-full sm:h-[60px] xs:h-[40px] rounded-[30px] custom-bg text-white mt-4 text-[1.2rem] mb-5"
          @click="scrollView('section5')"
        >
          무료 상담 신청
        </button>
        <img
          src="https://triplus.softloan.kr/gld/images/main_img.png"
          alt="main"
        />
      </div>
    </section>

    <!-- 2 -->
    <section class="flex flex-col items-center py-28 p-[2rem] section2">
      <div class="wrapper w-full flex flex-col items-center">
        <div class="flex flex-col items-center">
          <b class="text-3xl">더드림론은 다르다!</b>
          <hr />
        </div>

        <div class="w-full grid sm:grid-cols-5 xs:grid-cols-2 gap-5">
          <div
            class="bg-[#f8f8f8] shadow flex flex-col items-center gap-5 sm:py-[40px] xs:py-[20px] rounded-[10px]"
            v-for="(item, index) in introduce"
            :key="index"
          >
            <div
              class="bg-white rounded-[50%] sm:w-[55px] xs:w-[45px] sm:h-[55px] xs:h-[45px] flex justify-center items-center"
            >
              <img :src="`/${index + 1}.png`" class="sm:h-[26px] xs:h-[21px]" />
            </div>
            <p class="whitespace-pre-wrap text-center">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center py-14 p-[2rem]">
      <div class="wrapper w-full flex flex-col items-center">
        <div class="flex flex-col mb-10 gap-2">
          <b class="text-2xl text-[#aaa]"
            >{{ new Date().getFullYear() }}년 {{ new Date().getMonth() + 1 }}월
            {{ new Date().getDate() }}일 기준
          </b>
          <b class="text-3xl">3,452,558명이 승인되었습니다.</b>
        </div>

        <div class="w-full h-[368px] xs:px-[2rem] max-w-[1200px] mt-[28px]">
          <vueper-slides
            class="no-shadow h-[43.4rem]"
            :visible-slides="4"
            :slide-ratio="1 / 4"
            :dragging-distance="70"
            :bullets="false"
            slide-multiple
            :duration="2000"
            :gap="2"
            :arrows="false"
            autoplay
            :breakpoints="{
              600: { visibleSlides: 2, slideMultiple: 1 },
              900: { visibleSlides: 2, slideMultiple: 2 },
            }"
          >
            <vueper-slide
              v-for="(item, index) in applyLoan"
              :key="index"
              class="h-[43.4rem]"
              style="height: 43.4rem"
            >
              <template v-slot:content>
                <div
                  class="w-full bg-[#f8f8f8] shadow flex flex-col gap-5 p-10 rounded-[10px]"
                >
                  <div class="text-primary">{{ item.title }}</div>
                  <div class="text-[#666]">{{ item.desc }}</div>
                  <b>{{ item.money }}</b>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
        <!-- <div class="w-full grid sm:grid-cols-4 xs:grid-cols-2 gap-5">
         
        </div> -->
      </div>
    </section>

    <!-- 3 -->
    <section
      class="flex flex-col items-center py-28 p-[2rem] custom-bg text-white section3"
    >
      <div class="wrapper flex flex-col items-center">
        <div class="flex flex-col items-center">
          <b class="text-3xl text-center"
            >직장인·사업자·프리랜서 대상<br />
            최대 2억원까지 저금리로 빠르게!!</b
          >
          <p
            class="my-[20px] text-[#FF649C] text-xl flex items-center gap-2 text-center"
          >
            <img :src="`warning.png`" class="h-[17px]" />
            <b>연체자·신불자·미성년자는 신청 불가합니다.</b>
          </p>
        </div>

        <div
          class="w-full flex items-center sm:flex-row xs:flex-col sm:gap-5 xs:gap-2"
        >
          <div
            class="flex sm:flex-row xs:flex-col items-center gap-2"
            v-for="(item, index) in procedure"
            :key="index"
          >
            <div
              class="flex flex-col justify-center items-center gap-5 sm:py-[40px] xs:py-[20px] rounded-[10px]"
            >
              <p class="whitespace-pre-wrap text-center">{{ item.step }}</p>
              <div
                class="bg-[#f4f4f4] rounded-[50%] w-[55px] h-[55px] flex justify-center items-center"
              >
                <img :src="`/0${index + 1}.png`" />
              </div>
              <p class="whitespace-pre-wrap text-center">{{ item.title }}</p>
              <p class="whitespace-pre-wrap text-center text-sm">
                {{ item.desc }}
              </p>
            </div>
            <img
              :src="`arrow.png`"
              v-if="procedure.length - 1 !== index"
              class="sm:block xs:hidden"
            />
            <img
              :src="`arrow-bottom.png`"
              v-if="procedure.length - 1 !== index"
              class="sm:hidden xs:block"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 4 -->
    <section class="flex flex-col items-center py-28 p-[2rem] section4">
      <div class="wrapper flex flex-col items-center">
        <div class="flex flex-col items-center">
          <b class="text-3xl">신청대상</b>
          <hr />
        </div>

        <div class="w-full flex flex-col gap-5">
          <div
            class="shadow flex sm:flex-row xs:flex-col items-center font-bold gap-5 sm:py-[30px] sm:px-[40px] xs:px-[20px] xs:py-[20px] rounded-[10px] relative text-white text-lg"
            v-for="(item, index) in apply"
            :key="index"
            :class="
              index === 0
                ? '_bg1'
                : index === 1
                ? '_bg2'
                : index === 2 && '_bg3'
            "
          >
            <div class="flex flex-col mr-5">
              <p class="whitespace-pre-wrap text-center w-[145px]">
                {{ item.title }}
              </p>
            </div>
            <div class="whitespace-pre-wrap">
              <div
                v-for="(_item, index) in item.desc"
                :key="index"
                class="flex items-center gap-3"
              >
                <img src="/check.png" />
                <span> {{ _item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 -->
    <section
      class="flex flex-col items-center py-28 p-[2rem] bg-[#f8f8f8] section5"
    >
      <div class="wrapper w-full flex flex-col items-center">
        <div class="flex flex-col items-center relative">
          <b class="text-3xl">최저금리 안심대출 상담신청</b>

          <div class="relative my-4">
            <img
              src="https://linkbe.cdn3.cafe24.com/img/img_safe/icon_lock_back.png"
            />
            <img
              src="https://linkbe.cdn3.cafe24.com/img/img_safe/icon_lock.png"
              class="lock"
            />
          </div>

          <!-- <client-only>
            <Vue3Lottie
              animationLink="https://lottie.host/aeecdce1-8863-4f8d-9124-da5f4524f544/KWmDDj11zF.json"
              :height="100"
              :width="100"
            />
          </client-only> -->
          <span class="text-[#333333b3] text-center"
            >고객님의 소중한 개인정보는 보안프로그램에 의해<br />
            안전하게 보관합니다.</span
          >
        </div>
        <div
          class="w-full flex flex-col sm:gap-10 xs:gap-1 gap-2 mt-10 bg-white py-10 px-10"
        >
          <div class="flex sm:flex-row xs:flex-col gap-2">
            <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>이름</label>
              <input
                v-model="name"
                placeholder="이름을 입력해주세요"
                class="w-full border-[1px] border-[#ddd] rounded-1 px-2 py-3"
              />
            </div>

            <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>전화번호</label>
              <input
                v-model="phone"
                placeholder="전화번호를 입력해주세요"
                class="w-ful border-[1px] border-[#ddd] rounded-1 px-2 py-3"
              />
            </div>
          </div>

          <div class="flex sm:flex-row xs:flex-col gap-2">
            <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>직업구분</label>
              <div class="flex gap-1">
                <button
                  @click="insurnace = '4대보험 가입'"
                  :class="
                    insurnace === '4대보험 가입'
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  4대보험 가입
                </button>
                <button
                  @click="insurnace = '사업자/기타'"
                  :class="
                    insurnace === '사업자/기타'
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  사업자/기타
                </button>
              </div>
            </div>

            <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>신용카드 유무</label>
              <div class="flex gap-1">
                <button
                  @click="card = '소유'"
                  :class="
                    card === '소유'
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  소유
                </button>
                <button
                  @click="card = '미소유'"
                  :class="
                    card === '미소유'
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  미소유
                </button>
              </div>
            </div>

            <!-- <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>자산 유무(본인 명의의 집 또는 차)</label>
              <div class="flex gap-1">
                <button
                  @click="asset = true"
                  :class="
                    asset ? ' border-primary text-primary' : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  소유
                </button>
                <button
                  @click="asset = false"
                  :class="
                    asset === false
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  미소유
                </button>
              </div>
            </div> -->
          </div>

          <!-- <div class="flex sm:flex-row xs:flex-col gap-2">
            <div class="sm:w-[50%] xs:w-full flex flex-col gap-1">
              <label>연체유무(최근 6개월이내) </label>
              <div class="flex gap-1">
                <button
                  @click="overdue = true"
                  :class="
                    overdue ? ' border-primary text-primary' : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  연체 있음
                </button>
                <button
                  @click="overdue = false"
                  :class="
                    overdue === false
                      ? ' border-primary text-primary'
                      : 'border-gray'
                  "
                  class="border-[1px] rounded px-2 py-3 w-[50%]"
                >
                  연체 없음
                </button>
              </div>
            </div>
          </div> -->
          <div class="sm:w-[100%] xs:w-full flex flex-col gap-1">
            <label>메모</label>
            <!-- <div class="flex gap-1">
              <button
                @click="income = 1"
                :class="
                  income === 1 ? ' border-primary text-primary' : 'border-gray'
                "
                class="border-[1px] rounded px-2 py-3 w-[33%]"
              >
                3천 미만
              </button>
              <button
                @click="income = 2"
                :class="
                  income === 2 ? ' border-primary text-primary' : 'border-gray'
                "
                class="border-[1px] rounded px-2 py-3 w-[33%]"
              >
                5천 미만
              </button>
              <button
                @click="income = 3"
                :class="
                  income === 3 ? ' border-primary text-primary' : 'border-gray'
                "
                class="border-[1px] rounded px-2 py-3 w-[33%]"
              >
                6천 이상
              </button>
            </div> -->
            <textarea
              rows="4"
              class="border-[1px] border-[#ddd]"
              v-model="memo"
            />
          </div>
        </div>
        <div
          class="w-full flex justify-between items-center mt-[3rem] mb-[1rem] bg-white py-3 px-10"
        >
          <button @click="isOpen = !isOpen" class="underline">
            개인정보 처리방침 동의
          </button>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="text-primary w-[20px] h-[20px]"
              v-model="agreement"
            />
            <span>개인정보 동의</span>
          </div>
        </div>

        <div
          class="text-sm w-full h-[126px] overflow-y-scroll bg-white px-10 py-4 mb-[3rem]"
          v-if="isOpen"
        >
          <b>개인정보취급방침</b><br />
          <div class="px-4 py-2 whitespace-pre-wrap">
            {{
              `수집하는 개인정보의 항목
적법하고 공정한 수단에 의해서만 개인정보를 수집하며, 회원가입약관 또는 개인정보의 제공, 활용 동의서의 내용에 대해
이용자의 개인정보를 수집하는 경우에 당해 이용자가 동의함 또는 동의하지 않음 버튼을 클릭 하는 등의 이용자의 동의를 얻는 절차를 거칩니다.
귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.`
            }}
          </div>
        </div>
        <button
          class="max-w-[400px] w-full h-[60px] rounded-[30px] custom-bg text-white sm:text-[1.2rem] xs:text-[16px] mt-[2rem]"
          @click="sendEmail"
          :disabled="loading"
        >
          무료 상담 신청하기
        </button>
      </div>
    </section>
  </main>
  <footer
    class="flex justify-center h-full gap-4 whitespace-pre-wrap p-[20px] border-t-[1px] border-[#f4f4f4]"
  >
    <div class="text-[#888] whitespace-nowrap text-xl h-full">더드림론</div>
    <p class="text-sm">
      {{
        `이자 외 별도로 중개수수료를 수취하는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨 줄 수 있습니다. 대출상품 이용 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다. 신용등급 또는 개인신용평점 하락으로 금융거래가 제약될 수 있습니다.
부대비용 및 중도상환수수료 없음. 단, 부동산 담보대출에 한하여 부대비용(증지대, 확인서면비, 주소 변경비, 말소비(건당), 채권 할인료, 등록세, 교육세)과 3%의 중도상환수수료가 발생할 수 있음 (기 납입 이자와 중도상환수수료를 합산한 금액이 연 20% 초과하지 않음)

이 사이트에서 광고되는 상품들의 상환 기간은 모두 최단 3개월 최장 60개월이며, 최대 연 이자율은 20%입니다. 대출 총비용 예시는 다음과 같습니다. 1,000,000원을 12개월 동안 이자 20% (최대 연 이자율:20%)로 대출할 시 총상환금액:1,111,614원 (대출 상품에 따라 달라질 수 있습니다.)
계약 및 금융상품체결 전 금융상품설명서 및 약관을 읽어보시기 바랍니다. 일반금융소비자는 금융판매사업자로부터 충분한 사전 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하시기 바랍니다.

일정기간 납부해야할 원리금이 연체될 경우에 계약만료 기한이 도래하기 전에 모든 원리금을 변제해야 할 의무가 발생할 수 있습니다.
상품명 : 개인회생자대출, 파산면책자대출, 일반신용대출, 자동차담보대출, 주택담보대출
신용조건 : 회생/파산상품-회생, 파산으로 인한 신용요건 해당 없음, 일반신용, 자동차담보, 주택담보-신용평점 600점 이상
상환기간 : 12개월~60개월, 상품마다 상이, 중도상환 가능 (단, 대출상품 및 상환방법 등 대출계약 내용에 따라 달라질 수 있습니다.)

「특정금융거래정보의 보고 및 이용 등에 관한 법률」에 따라 신원확인 등의 정보 등을 제공하셔야 하며, 이를 거부하거나 검증이 불가능 한 경우, 금융거래가 제한될 수 있습니다.
더드림론 복수의 대출사 상품을 판매하고 있습니다.
「대부업 등의 등록 및 금융이용자 보호에 관한 법률」에 따라 의정부시청 지역경제과 정식등록 업체입니다.
「대부업 등의 등록 및 금융이용자 보호에 관한 법률」「금융소비자 보호에 관한 법률」 에 따라 광고 절차를 준수하고 있습니다.
대출 중개 수수료는 없습니다.
  `
      }}
    </p>
  </footer>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import emailjs from "@emailjs/browser";
export default {
  name: "HomeView",
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {},
  setup() {},

  data() {
    return {
      name: "",
      insurnace: null,
      asset: null,
      overdue: null,
      card: null,
      phone: null,
      income: 0,
      memo: "",
      menu: false,
      isOpen: false,
      loading: false,
      agreement: false,
      breakpoints: {
        400: { visibleSlides: 1, slideMultiple: 1 },
        900: { visibleSlides: 2, slideMultiple: 2 },
      },
      introduce: [
        "더 낮은 금리로\n이자 부담 DOWN",
        "채무통합으로\n신용평점 UP",
        "넉넉하게\n최대 2억원까지",
        "취급수수료 및\n기타 부대비용 NO!",
        "상담 · 조회 · 심사\n당일진행 원칙!",
        "상황에 맞는\n맞춤 컨설팅!",
        "최장 72개월로\n여유로운 상환",
        "안전하고 철저한\n개인정보 관리",
        "대출 이후에도\n꾸준한 관리와 컨설팅!",
        "1:1전문 상담 지원으로\n궁금증 해결!",
      ],
      procedure: [
        {
          step: "STEP 01.",
          title: "상담신청 ",
          desc: "신청폼을 통하여 인적정보 내용을 입력합니다.",
        },
        {
          step: "STEP 02.",
          title: "대출상담",
          desc: "전문 상담사와 고객님의 상황에 맞춰 상담을 진행합니다.",
        },
        {
          step: "STEP 03.",
          title: "대출심사",
          desc: "고객님의 정보를 토대로 시스템에 의해 심사가 진행됩니다.",
        },
        {
          step: "STEP 04.",
          title: "대출승인",
          desc: "대출승인 여부, 한도 및 금리, 준비 서류 등을 안내합니다.",
        },
        {
          step: "STEP 05.",
          title: "대출실행",
          desc: "대출 실행 후, 고객님 계좌에 대출금이 입금됩니다.",
        },
      ],

      apply: [
        {
          title: "직장인",
          desc: [
            "재직기간 3개월 이상\n",
            "22세 ~ 55세",
            "최소 300만원 ~ 최대 2억원",
          ],
        },
        {
          title: "자영업자, 소상공인",
          desc: [
            "운영기간 3개월 이상",
            "전국 사업자 누구나 신청 가능합니다.",
            "22세 ~ 55세",
            "최소 300만원 ~ 최대 2억원",
          ],
        },
        // {
        //   title: "프리랜서",
        //   desc: ["재직기간 3개월 이상", "22세 ~ 55세", "최소 300만원 ~ 최대 1억원"],
        // },
        // {
        //   title: "주부/무직자",
        //   desc: ["22세 ~ 55세", "최소 300만원 ~ 최대 1억원"],
        // },
        {
          title: "기타",
          desc: [
            "본인명의차량 소유자 최소 300만원 ~ 최대 1억원",
            "본인명의 집 (전, 월세 포함) 있을 시\n최소 2,000만원~ LTV 90%까지",
            "신용카드 이용시 최소 30만원 ~ 최대 2,000만원",
          ],
        },
      ],

      applyLoan: [
        {
          title: "대환대출",
          desc: "30대/직장인/개인싱용점수/650점",
          money: "6,200만원",
        },
        {
          title: "대환대출",
          desc: "40대/직장인/개인신용점수 700점",
          money: "4,300만원",
        },
        {
          title: "대환대출",
          desc: "20대/직장인/개인신용점수 600점",
          money: "3,400만원",
        },
        {
          title: "대환대출",
          desc: "50대/직장인/개인신용점수 688점",
          money: "8,600만원",
        },
        {
          title: "대환대출",
          desc: "30대/직장인/개인싱용점수/650점",
          money: "6,200만원",
        },
        {
          title: "대환대출",
          desc: "40대/직장인/개인신용점수 700점",
          money: "4,300만원",
        },
        {
          title: "대환대출",
          desc: "20대/직장인/개인신용점수 600점",
          money: "3,400만원",
        },
        {
          title: "대환대출",
          desc: "50대/직장인/개인신용점수 688점",
          money: "8,600만원",
        },
      ],
    };
  },
  computed: {},
  methods: {
    sendEmail() {
      if (!this.name) {
        return alert("이름을 입력해주세요");
      }
      if (!this.phone || this.phone.length < 9) {
        return alert("휴대폰 번호를 올바르게 입력해주세요");
      }
      if (!this.insurnace) {
        return alert("직업구분을 입력해주세요");
      }
      if (!this.card) {
        return alert("신용카드 유뮤를 입력해주세요");
      }
      if (!this.agreement) {
        return alert("개인정보 약관에 동의해주세요");
      }

      this.loading = true;
      const form = {
        name: this.name,
        phone: this.phone,
        job: this.insurnace,
        card: this.card,
        memo: this.memo,
      };

      emailjs
        .send("service_3uwosf8", "template_j1kdgc2", form, "whlv47Wmf09qQsiNX")
        .then(
          (result) => {
            alert("이메일 전송이 완료되었습니다!", result.text);
          },
          (error) => {
            alert("이메일 전송이 실패되었습니다", error.text);
          }
        );

      this.loading = false;
      location.reload();
    },
    scrollView(className) {
      const ele = document.querySelector(`.${className}`);
      ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      menu.value = false;
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped></style>
