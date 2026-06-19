"use client";
import { useState } from "react";

const questions = [
    {
        tag: "Background",
        text: "Astrology mein aap abhi kahan tak hain?",
        options: [
            { text: "Bilkul naya hoon — Mangal, Shani sunte hain but kuch samajh nahi aata", score: 0 },
            { text: "Basic jaankari hai — Rashi, Graha ke naam jaanta/jaanti hoon", score: 1 },
            { text: "Thoda seekha hai — Kundli padh sakta/sakti hoon, kuch yogas bhi", score: 2 },
            { text: "Kafi seekha hai — Dasha, Transit, Vargas samjhte hain", score: 3 },
        ],
    },
    {
        tag: "Background",
        text: "Aapne Astrology kab se seekhna shuru kiya?",
        options: [
            { text: "Abhi abhi interest hua hai — shuruat kar raha/rahi hoon", score: 0 },
            { text: "6 mahine se 1 saal se seekh raha/rahi hoon", score: 1 },
            { text: "1–3 saal se kuch na kuch padha hai", score: 2 },
            { text: "3 saal se zyada ho gaye hain seekhte seekhte", score: 3 },
        ],
    },
    {
        tag: "Goals",
        text: "Aap Jyotish kyun seekhna chahte/chahti hain?",
        options: [
            { text: "Apni aur family ki kundli khud samajh sakoon", score: 0 },
            { text: "Dosto aur relatives ko guide kar sakoon", score: 1 },
            { text: "Ek professional Jyotishi banna chahta/chahti hoon", score: 2 },
            { text: "Research karna hai ya Jyotish sikhana hai doosron ko", score: 3 },
        ],
    },
    {
        tag: "Goals",
        text: "Aap Jyotish mein kahan tak jaana chahte hain?",
        options: [
            { text: "Basics samajhna kaafi hai mere liye", score: 0 },
            { text: "Kundli padh sakoon — graduation level", score: 1 },
            { text: "Post graduation tak — deep knowledge chahiye", score: 2 },
            { text: "PhD level — researcher ya acharya banna hai", score: 3 },
        ],
    },
    {
        tag: "Commitment",
        text: "Aap is program mein kitna time de sakte/sakti hain?",
        options: [
            { text: "Thoda busy hoon — sirf weekends pe thoda time mil sakta hai", score: 0 },
            { text: "Week mein 3–5 ghante nikal sakta/sakti hoon", score: 1 },
            { text: "Daily 1 ghanta ya zyada — serious hoon main", score: 2 },
            { text: "Yeh meri priority hai — jo bhi chahiye dunga/dungi", score: 3 },
        ],
    },
    {
        tag: "Background",
        text: "Pehle koi Astrology course kiya hai?",
        options: [
            { text: "Nahi, yeh pehli baar hoga", score: 0 },
            { text: "YouTube / free content se padha hai", score: 1 },
            { text: "Koi short course ya workshop kiya hai", score: 2 },
            { text: "Structured course kiya hai already", score: 3 },
        ],
    },
];

const vehicles = ["🚶", "🚲", "🛵", "🏍️", "🛺", "🚗", "✈️"];
const vehiclePositions = [0, 16.6, 33.3, 50, 66.6, 83.3, 100];

const programs = [
    {
        score: [0, 2],
        vehicle: "🚲",
        level: "Graduation — Foundation",
        name: "Jyotish Beej",
        desc: "Perfect starting point! Aap paidal hain abhi — hum aapko Cycle pe bithate hain.",
        badges: ["Beej", "Foundation", "Beginner Friendly"],
    },
    {
        score: [3, 5],
        vehicle: "🛵",
        level: "Graduation — Intermediate",
        name: "Jyotish Ankur",
        desc: "Basics jaante ho — ab Moped pe upgrade karte hain!",
        badges: ["Ankur", "Intermediate"],
    },
    {
        score: [6, 9],
        vehicle: "🏍️",
        level: "Graduation — Advanced",
        name: "Jyotish Pallav",
        desc: "Motorcycle time! Advanced kundli reading and yogas.",
        badges: ["Pallav", "Advanced"],
    },
    {
        score: [10, 13],
        vehicle: "🛺",
        level: "Post Graduation",
        name: "Jyotish Taru + Pushpa",
        desc: "Deep research and complex charts.",
        badges: ["Taru", "Pushpa", "Expert"],
    },
    {
        score: [14, 18],
        vehicle: "🚗",
        level: "Pre-PHD",
        name: "Vriksha + Bhrigu Chakra Paddhati",
        desc: "Master level. Rare techniques and research.",
        badges: ["Vriksha", "Bhrigu", "Master"],
    },
];

export default function JyotishYatraQuiz() {
    const [name, setName] = useState("");
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const [result, setResult] = useState(null);

    const questionVehicleMap = [0, 1, 2, 3, 4, 5];

    const vehicleIndex = quizCompleted ? 6 : questionVehicleMap[currentQ];

    const vehicleProgress = quizCompleted ? 100 : vehiclePositions[vehicleIndex];

    const startQuiz = () => {
        if (!name.trim()) {
            alert("Please enter your name");
            return;
        }

        setQuizStarted(true);
        setCurrentQ(0);
    };

    const selectOption = (index) => {
        setSelectedOption(index);

        const updated = [...answers];
        updated[currentQ] = index;
        setAnswers(updated);
    };

    const goNext = () => {
        if (selectedOption === null) return;

        if (currentQ < questions.length - 1) {
            const next = currentQ + 1;
            setCurrentQ(next);
            setSelectedOption(answers[next] ?? null);
        } else {
            const totalScore = answers.reduce((sum, ans, i) => sum + questions[i].options[ans].score, 0);

            let program = programs[0];

            for (const p of programs) {
                if (totalScore >= p.score[0] && totalScore <= p.score[1]) {
                    program = p;
                    break;
                }
            }

            setResult(program);
            setQuizCompleted(true);
        }
    };

    const goBack = () => {
        if (currentQ > 0) {
            setCurrentQ(currentQ - 1);
            setSelectedOption(answers[currentQ - 1] ?? null);
        }
    };

    return (
        <div className="min-h-screen w-full bg-white flex justify-center px-4 py-8">
            <div className="w-full max-w-[680px]">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-[22px] font-medium text-[#111827] mb-1">🪐 Jyotish Yatra — Aap Kahan Hain?</h1>
                    <p className="text-sm text-[#6b7280]">5 quick questions • Your vehicle awaits</p>
                </div>

                {/* Vehicle Track */}
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl px-5 py-4 mb-6">
                    <div className="text-[12px] text-[#6b7280] mb-2 text-center">Aapki Yatra 🚶 ➜ ✈️</div>

                    <div className="relative flex items-center justify-between py-1">
                        {/* Road */}
                        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#e5e7eb] -translate-y-1/2 z-0"></div>

                        {/* Progress */}
                        <div
                            className="absolute left-0 top-1/2 h-[2px] bg-[#D85A30] -translate-y-1/2 z-[1] transition-all duration-700"
                            style={{ width: `${vehicleProgress}%` }}
                        />

                        {/* Moving Vehicle */}
                        <div
                            className="absolute top-1/2 text-[22px] z-20 transition-all duration-700"
                            style={{
                                left: `${vehicleProgress}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {vehicles[vehicleIndex]}
                        </div>

                        {vehicles.map((icon, index) => {
                            const isDone = index < vehicleIndex;
                            const isActive = index === vehicleIndex;

                            return (
                                <div key={index} className="relative z-10 flex flex-col items-center gap-[2px]">
                                    <span
                                        className={`text-[20px] leading-none transition-all duration-500 ${
                                            isActive
                                                ? "scale-125 opacity-100 grayscale-0"
                                                : isDone
                                                  ? "opacity-100 grayscale-0"
                                                  : "opacity-30 grayscale"
                                        }`}
                                    >
                                        {icon}
                                    </span>

                                    <span className="hidden sm:block text-[9px] text-[#9ca3af] text-center leading-[1.2] max-w-[54px]">
                                        {index === 0 && "Paidal"}
                                        {index === 1 && (
                                            <>
                                                Cycle
                                                <br />
                                                (Beej)
                                            </>
                                        )}
                                        {index === 2 && (
                                            <>
                                                Moped
                                                <br />
                                                (Ankur)
                                            </>
                                        )}
                                        {index === 3 && (
                                            <>
                                                Bike
                                                <br />
                                                (Pallav)
                                            </>
                                        )}
                                        {index === 4 && (
                                            <>
                                                Auto
                                                <br />
                                                (PG)
                                            </>
                                        )}
                                        {index === 5 && (
                                            <>
                                                Car
                                                <br />
                                                (PhD)
                                            </>
                                        )}
                                        {index === 6 && (
                                            <>
                                                Jet
                                                <br />
                                                (PHD)
                                            </>
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-[10px] mb-5">
                    <div className="flex-1 h-[4px] bg-[#e5e7eb] rounded overflow-hidden">
                        <div
                            className="h-full bg-[#D85A30] rounded transition-all duration-500"
                            style={{
                                width: `${(currentQ / questions.length) * 100}%`,
                            }}
                        />
                    </div>

                    <span className="text-[12px] text-[#6b7280] whitespace-nowrap">
                        Question {currentQ + 1} of {questions.length}
                    </span>
                </div>

                {!quizStarted && (
                    <div>
                        <div className="mb-5">
                            <label className="block text-sm text-gray-900 mb-2">Aapka naam kya hai? (Your name)</label>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name..."
                                className="w-full px-3 py-[9px] border border-[#d1d5db] rounded-[10px] outline-none text-black"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={startQuiz}
                                className="px-6 py-[9px] bg-[#D85A30] text-white rounded-[10px]"
                            >
                                Shuru Karein →
                            </button>
                        </div>
                    </div>
                )}

                {quizStarted && !quizCompleted && (
                    <div>
                        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 mb-4 animate-in fade-in duration-300">
                            <p className="text-[11px] uppercase tracking-wider text-[#D85A30] mb-2">
                                {questions[currentQ].tag}
                            </p>

                            <h2 className="text-[16px] font-medium text-[#111827] mb-4 leading-[1.4]">
                                {questions[currentQ].text}
                            </h2>

                            <div className="flex flex-col gap-2">
                                {questions[currentQ].options.map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => selectOption(i)}
                                        className={`flex items-start gap-[10px] text-black px-[14px] py-[10px] rounded-[10px] text-left border transition-all text-[14px] leading-[1.4] ${
                                            selectedOption === i
                                                ? "border-[#D85A30] bg-white"
                                                : "bg-[#f9fafb] border-[#e5e7eb] hover:border-[#d1d5db]"
                                        }`}
                                    >
                                        <span
                                            className={`min-w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] mt-[1px] ${
                                                selectedOption === i
                                                    ? "bg-[#D85A30] text-white"
                                                    : "bg-[#e5e7eb] text-[#6b7280]"
                                            }`}
                                        >
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={goBack}
                                className={`px-[18px] py-[9px] border border-[#e5e7eb] rounded-[10px] text-[14px] text-[#6b7280] ${
                                    currentQ === 0 ? "invisible" : ""
                                }`}
                            >
                                ← Back
                            </button>

                            <button
                                onClick={goNext}
                                disabled={selectedOption === null}
                                className="px-[24px] py-[9px] bg-[#D85A30] text-white rounded-[10px] text-[14px] disabled:opacity-40"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}
                {quizCompleted && result && (
                    <div>
                        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 text-center">
                            <div className="text-[56px] mb-3">{result.vehicle}</div>

                            <div className="text-[13px] uppercase tracking-wider text-[#D85A30] mb-1">
                                {result.level}
                            </div>

                            <div className="text-[20px] font-medium text-[#111827] mb-2">{result.name}</div>

                            <div className="text-[14px] text-[#6b7280] leading-[1.6] mb-5">{result.desc}</div>

                            <div className="flex flex-wrap justify-center gap-2 mb-5">
                                {result.badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 rounded-full text-xs border ${
                                            i === 0
                                                ? "bg-[#FAECE7] text-[#993C1D] border-[#D85A30]"
                                                : "bg-[#f9fafb] text-black border-[#e5e7eb]"
                                        }`}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <button className="px-7 py-3 bg-[#D85A30] text-white rounded-[10px]">
                                Yeh Program Chahiye →
                            </button>

                            <div className="text-xs text-[#9ca3af] mt-3">✓ Aapka result save ho gaya</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
